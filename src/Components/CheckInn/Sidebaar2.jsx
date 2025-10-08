import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebaar2() {
  const location = useLocation(); // To highlight the active route

  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "Room View", path: "/Checkinn" },
    { label: "Reservation / Book Now", path: "/reservation" },
    { label: "Guest View", path: "/guest-view" },
    { label: "Requisition Slip", path: "/requisition-slip" },
    { label: "Cash Book", path: "/cash-book" },
    { label: "Settings", path: "/settings" },
    { label: "Check In", path: "/check-in" },
    { label: "Check Out", path: "/check-out" },
    { label: "Receipt", path: "/receipt" },
    { label: "Vouchers", path: "/vouchers" },
    { label: "Swap Room", path: "/swap-room" },
  ];

  return (
    <div className="w-64 bg-[#0f172a] text-white h-[148vh] flex flex-col hidden sm:block ">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-sm text-gray-400">GENERAL MANAGER</h2>
        <span className="text-green-400 text-xs">● Online</span>
      </div>

      {/* Hotel Name */}
      <div className="px-4 py-3 font-bold text-lg border-b border-gray-700">
        HOTEL STAYEZEE
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2 text-sm">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.path}
            label={item.label}
            to={item.path}
            active={location.pathname === item.path}
          />
        ))}
      </nav>
    </div>
  );
}

function SidebarItem({ label, to, active }) {
  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-md cursor-pointer transition ${active ? "bg-blue-700 font-semibold" : "hover:bg-blue-600"
        }`}
    >
      {label}
    </Link>
  );
}

export default Sidebaar2;
