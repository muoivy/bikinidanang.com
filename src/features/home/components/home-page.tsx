import { SiteHeader } from "@/components/layout/site-header";
import { homeNavItems } from "@/features/home/constants/nav-items";

export function HomePage() {
  return (
    <main>
      <SiteHeader navItems={homeNavItems} />
    </main>
  );
}
