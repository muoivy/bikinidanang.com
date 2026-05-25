"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { CartItem } from "@/entities/cart/types";

type CartStore = {
  items: CartItem[];

  // Actions
  addItem: (item: CartItem) => void;
  removeItem: (cartItemKey: string) => void;
  updateQuantity: (cartItemKey: string, quantity: number) => void;
  clearCart: () => void;

  // Computed (derived — call as functions)
  getItemCount: () => number;
  getSubtotal: () => number;
  hasItem: (productId: number, variationId?: number) => boolean;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (newItem) => {
        set((state) => {
          const existing = state.items.find(
            (i) =>
              i.productId === newItem.productId &&
              i.variationId === newItem.variationId
          );

          if (existing) {
            // Increment quantity if already in cart
            return {
              items: state.items.map((i) =>
                i.cartItemKey === existing.cartItemKey
                  ? {
                      ...i,
                      quantity: Math.min(
                        i.quantity + newItem.quantity,
                        i.maxQuantity ?? 99
                      ),
                    }
                  : i
              ),
            };
          }

          return { items: [...state.items, newItem] };
        });
      },

      removeItem: (cartItemKey) => {
        set((state) => ({
          items: state.items.filter((i) => i.cartItemKey !== cartItemKey),
        }));
      },

      updateQuantity: (cartItemKey, quantity) => {
        if (quantity <= 0) {
          get().removeItem(cartItemKey);
          return;
        }

        set((state) => ({
          items: state.items.map((i) =>
            i.cartItemKey === cartItemKey ? { ...i, quantity } : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getItemCount: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),

      getSubtotal: () =>
        get().items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),

      hasItem: (productId, variationId) =>
        get().items.some(
          (i) =>
            i.productId === productId &&
            (variationId === undefined || i.variationId === variationId)
        ),
    }),
    {
      name: "bikinidanang-cart", // localStorage key
      storage: createJSONStorage(() => localStorage),
      // Only persist the items array, not the functions
      partialize: (state) => ({ items: state.items }),
    }
  )
);
