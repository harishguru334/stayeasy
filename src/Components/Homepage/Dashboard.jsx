import { Link } from "react-router-dom";
import catagory from "../../Catagory";

function Dashboard() {
    return (
        <>
            <div className="bg-gray-200 min-h-[87vh] m-3 mt-7 pr-5 sm:pr-14 overflow-y-auto">
                
                {/* Top Buttons */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3 p-2 text-xs">
                        <button className="flex flex-col items-center bg-white shadow px-3 py-2 rounded w-16 hover:bg-blue-100">
                            <i className="fa-solid fa-gauge text-lg mb-1"></i>
                            <span>Dashboard</span>
                        </button>
                        <button className="flex flex-col items-center bg-white shadow px-3 py-2 rounded w-16 hover:bg-blue-100">
                            <i className="fa-solid fa-chart-pie text-lg mb-1"></i>
                            <span>Chart</span>
                        </button>
                        <button className="flex flex-col items-center bg-white shadow px-3 py-2 rounded w-16 hover:bg-blue-100">
                            <i className="fa-solid fa-utensils text-lg mb-1"></i>
                            <span>Food Chart</span>
                        </button>
                        <button className="flex flex-col items-center bg-white shadow px-3 py-2 rounded w-16 hover:bg-blue-100">
                            <i className="fa-solid fa-chart-line text-lg mb-1"></i>
                            <span>Sale Chart</span>
                        </button>
                    </div>
                    <h3 className="font-semibold text-sm">
                        Balance: ......
                    </h3>
                </div>

                {/* Category Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pl-2 pr-1 pb-4">
                    {catagory && catagory.map((item) => {
                        return (
                            <Link
                                key={item.route}
                                to={item.route}
                                className="block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="w-full h-[160px]">
                                    <img
                                        src={item.Image}
                                        alt={item.name || "category"}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Dashboard;