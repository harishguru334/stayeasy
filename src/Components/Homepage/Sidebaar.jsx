function Sidebar() {
  return (
    <div className="w-55 bg-gray-900 text-white h-auto p-4 space-y-4 hidden sm:block">
      <h1 className="bg-blue-700 p-5 pt-0.5 m-[-15px] text-xl text-bold text-center">HOME</h1>
      <h2 className="text-xs font-bold bg-black p-[12px] ml-[-16px] mt-[-13px] mr-[-13px] text-center">HOTEL SUNSOFT INN</h2>
      <ul className="space-y-2">
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i class="fa-solid fa-hotel"></i> Hotel Profile</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i class="fa-solid fa-gears"></i> User Setting</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i class="fa-solid fa-hotel"></i> Change Hotel</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i class="fa-solid fa-key"></i> Change Password</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i class="fa-solid fa-user"></i> Guest</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i class="fa-solid fa-file"></i> Admin Report</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i class="fa-solid fa-file"></i> F&B report</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i class="fa-solid fa-file"></i> GST payble</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i class="fa-solid fa-file"></i> setlement summary</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer text-[15px]"><i class="fa-solid fa-right-from-bracket"></i> Logout </li>
      </ul>
    </div>
  );
}
export default Sidebar;
