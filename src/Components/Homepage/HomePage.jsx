import Dashboard from "./Dashboard";
import Navbaar from "./Navbaar";
import Sidebar from "./Sidebaar";

function HomePage() {
    return (
        <>
        <Navbaar />
       <div className="flex justify-left">
         <Sidebar />
       <div className="w-full">
          <Dashboard />
       </div>
       </div>

        </>
    )
}
export default HomePage;