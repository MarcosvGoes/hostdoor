"use client";
import MobileNav from "./MobileNav/MobileNav";
import DesktopNav from "./DesktopNav/DesktopNav";

export default function Navbar() {

  return (
    <nav className="w-full">
      <div className="flex lg:hidden z-50">
        <MobileNav />
      </div>

      <div className="hidden lg:block">
        <DesktopNav />
      </div>
    </nav>
  );
}
