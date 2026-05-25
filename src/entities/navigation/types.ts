export type NavItem = {
  label: string;
  href: string;
  active?: boolean;
  children?: NavMenuItem[];
};

export type NavMenuItem = {
  label: string;
  href: string;
  children?: NavMenuItem[];
};
