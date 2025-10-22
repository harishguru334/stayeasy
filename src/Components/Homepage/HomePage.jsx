import { useState } from "react";
import Dashboard from "./Dashboard";
import Navbaar from "./Navbaar";
import Sidebar from "./Sidebaar";

function HomePage() {

  const [isSidebarOpen , setIsSidebarOpen] = useState(false)

  const toggleSidebar = ()=>{
    setIsSidebarOpen(!isSidebarOpen);
  };

    return (
        <>
       <div className="flex justify-left">
       
        {isSidebarOpen &&(<Sidebar />)}
       
        
       <div className="w-full">
        <Navbaar onToggle={toggleSidebar} />
          <Dashboard />
       </div>
       </div>

        </>
    )
}
export default HomePage;