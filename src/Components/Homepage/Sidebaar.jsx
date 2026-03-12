import { useLocation } from "react-router-dom";

function Sidebar() {

  const location = useLocation();

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
    <div className="bg-[#0f172a] text-white w-64 h-screen shadow-lg">
      
      <h1 className="bg-blue-700 p-2 text-center font-bold">
        <i className="fa-solid fa-house mr-2"></i>
        <span className="hidden sm:inline">HOME</span>
      </h1>

      <h2 className="text-xs font-bold bg-black p-3 text-center">
        <span className="hidden sm:inline">HOTEL SUNSOFT INN</span>
      </h2>

      <ul className="space-y-2 p-2">
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]">
          <i className="fa-solid fa-hotel mr-2"></i>
          <span className="hidden sm:inline">Hotel Profile</span>
        </li>

        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]">
          <i className="fa-solid fa-gears mr-2"></i>
          <span className="hidden sm:inline">User Setting</span>
        </li>

        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]">
          <i className="fa-solid fa-user mr-2"></i>
          <span className="hidden sm:inline">Guest</span>
        </li>

        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]">
          <i className="fa-solid fa-file mr-2"></i>
          <span className="hidden sm:inline">Admin Report</span>
        </li>

        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]">
          <i className="fa-solid fa-right-from-bracket mr-2"></i>
          <span className="hidden sm:inline">Logout</span>
        </li>
      </ul>

    </div>
  );
}

export default Sidebar;