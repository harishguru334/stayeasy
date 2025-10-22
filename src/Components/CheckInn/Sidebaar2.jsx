import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBed,
  FaUser,
  FaCog,
  FaBook,
  FaExchangeAlt,
  FaMoneyBill,
  FaReceipt,
  FaDoorOpen,
} from "react-icons/fa";

function Sidebaar2() {
  const location = useLocation(); // To highlight the active route

  const menuItems = [
    { label: "Dashboard", path: "/", icon: <FaTachometerAlt /> },
    { label: "Room View", path: "/Romm_veiw", icon: <FaBed /> },
    { label: "Reservation / Book Now", path: "/reservation", icon: <FaBook /> },
    { label: "Guest View", path: "/guest-view", icon: <FaUser /> },
    { label: "Requisition Slip", path: "/requisition-slip", icon: <FaBook /> },
    { label: "Cash Book", path: "/cash-book", icon: <FaMoneyBill /> },
    { label: "Settings", path: "/settings", icon: <FaCog /> },
    { label: "Check In", path: "/check-in", icon: <FaDoorOpen /> },
    { label: "Check Out", path: "/check-out", icon: <FaDoorOpen /> },
    { label: "Receipt", path: "/receipt", icon: <FaReceipt /> },
    { label: "Vouchers", path: "/vouchers", icon: <FaMoneyBill /> },
    { label: "Swap Room", path: "/swap-room", icon: <FaExchangeAlt /> },
  ];

  return (
    <div className="w-64 bg-[#0f172a] text-white  h-screen overflow-scroll flex flex-col hidden sm:block ">
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
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 
                ${
                  isActive
                    ? "bg-blue-700 text-white font-semibold shadow-md"
                    : "hover:bg-blue-600 text-gray-300"
                }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* 🔹 Footer */}
      <div className="p-3 text-xs text-gray-400 border-t border-gray-700 text-center">
        © 2025 StayEzee Pvt Ltd
      </div>
    </div>
  );
}


export default Sidebaar2;
