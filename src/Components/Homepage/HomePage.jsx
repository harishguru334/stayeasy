<<<<<<< HEAD
import Dashboard from "./Dashboard"
=======
import { useState } from "react";
import Dashboard from "./Dashboard";
>>>>>>> 453a6542a7ebcda37d3425e3cbdc243205028bba
import Navbaar from "./Navbaar";
import Sidebar from "./Sidebaar";

function HomePage() {
<<<<<<< HEAD
  return (
    <>
      <div className="flex justify-left">
        <Sidebar />
        <div className="w-full">
          <Navbaar />
=======

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
>>>>>>> 453a6542a7ebcda37d3425e3cbdc243205028bba
          <Dashboard />

        </div>
      </div>

    </>
  )
}
export default HomePage;