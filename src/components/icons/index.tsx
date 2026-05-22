import type { ComponentType } from "react";
import { CartIcon } from "./cart";
import { MenuIcon } from "./menu";
import { SearchIcon } from "./search";
import type { IconProps } from "./types";

const iconMap = {
  cart: CartIcon,
  menu: MenuIcon,
  search: SearchIcon,
} satisfies Record<string, ComponentType<IconProps>>;

export type IconName = keyof typeof iconMap;

type Props = IconProps & {
  name: IconName;
};

export function Icon({ name, ...props }: Props) {
  const Comp = iconMap[name];
  return <Comp {...props} />;
}
