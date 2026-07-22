import { Outlet } from "react-router-dom";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileBottomNavigation from "@/components/layout/MobileBottomNavigation";

function AppShell() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pb-[76px] xl:pb-0">
        <Outlet />
      </main>

      <Footer />

      <MobileBottomNavigation />
    </div>
  );
}

export default AppShell;