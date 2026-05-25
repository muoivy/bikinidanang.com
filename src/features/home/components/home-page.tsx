import { SiteHeader } from "@/components/layout/site-header";
import { NAV_ITEMS } from "@/shared/config/navigation";

export function HomePage() {
  return (
    <>
      <SiteHeader navItems={NAV_ITEMS} />
      <main>
        {/* Homepage sections go here */}
      </main>
    </>
  );
}
