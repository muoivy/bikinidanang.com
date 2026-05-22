import type { Metadata } from 'next';
import { defaultMetadata } from '@/constants/seo';

export function buildMetadata(overrides?: Metadata): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
  };
}
