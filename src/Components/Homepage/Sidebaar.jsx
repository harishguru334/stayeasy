import { useLocation } from "react-router-dom";

function Sidebar() {

  const Location = useLocation()

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
  ]
  return (
    <div className="bg-[#0f172a] text-white w-64 md:w-64 w-56 h-screen shadow-lg ">
      <h1 className="bg-blue-700 p-1  sm:p-2   sm:text-sm  text-bold text-center"><i className="fa-solid pl-1 sm:-1 pl-1 sm:py-3 sm:pt-0.5  fa-house"></i> <span className=" hidden sm:inline">HOME</span></h1>
      <h2 className="text-xs font-bold bg-blue-700 sm:bg-black sm:p-[12px] sm:ml-[-16px] sm:mt-[-13px]  text-center"><span className=" hidden sm:inline">HOTEL SUNSOFT INN</span></h2>
      <ul className="space-y-2">
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i className="fa-solid pl-4 sm:pl-1 py-6 sm:py-1 fa-hotel"></i><span className=" hidden sm:inline"> Hotel Profile </span></li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i className="fa-solid pl-4 sm:pl-1 py-6 sm:py-1 fa-gears"></i><span className=" hidden sm:inline"> User Setting</span></li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i className="fa-solid pl-4 sm:pl-1 py-6 sm:py-1 fa-hotel"></i> <span className=" hidden sm:inline">Change Hotel</span></li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i className="fa-solid pl-4 sm:pl-1 py-6 sm:py-1 fa-key"></i><span className=" hidden sm:inline"> Change Password</span></li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i className="fa-solid pl-4 sm:pl-1 py-6 sm:py-1 fa-user"></i><span className=" hidden sm:inline"> Guest</span></li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i className="fa-solid pl-4 sm:pl-1 py-6 sm:py-1 fa-file"></i><span className=" hidden sm:inline"> Admin Report</span></li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i className="fa-solid pl-4 sm:pl-1 py-6 sm:py-1 fa-file"></i><span className=" hidden sm:inline"> F&B report</span></li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i className="fa-solid pl-4 sm:pl-1 py-6 sm:py-1 fa-file"></i><span className=" hidden sm:inline"> GST payble</span></li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i className="fa-solid pl-4 sm:pl-1 py-6 sm:py-1 fa-file"></i> <span className=" hidden sm:inline">setlement summary</span></li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i className="fa-solid pl-4 sm:pl-1 py-6 sm:py-1 fa-right-from-bracket"></i><span className=" hidden sm:inline"> Logout </span></li>
      </ul>
    </div>
  );
}
export default Sidebar;
