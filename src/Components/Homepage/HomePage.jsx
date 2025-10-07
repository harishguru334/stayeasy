import Dashboard from "./Dashboard";
import Navbaar from "./Navbaar";
import Sidebar from "./Sidebaar";

function HomePage() {
    return (
        <>
       <div className="flex justify-left">
         <Sidebar />
       <div className="w-full">
        <Navbaar />
          <Dashboard />
       </div>
       </div>

        </>
    )
}
export default HomePage;