"use client";
import MobileNav from "./MobileNav/MobileNav";
import DesktopNav from "./DesktopNav/DesktopNav";

export default function Navbar() {

  return (
    <nav>
      <div className="flex lg:hidden">
        <MobileNav />
      </div>

      <div className="hidden lg:block">
        <DesktopNav />
      </div>
    </nav>
  );
}
