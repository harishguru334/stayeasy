import { Link } from "react-router-dom";
import catagory from "../../Catagory";

function Dashboard() {
    return (
        <div className="bg-gray-200 min-h-screen overflow-x-hidden px-4 py-4">

            {/* TOP BAR */}
            <div className="flex flex-wrap justify-between items-center gap-3">

                {/* LEFT MENU */}
                <div className="flex flex-wrap items-center gap-4 text-sm">

                    <button className="flex items-center gap-2">
                        <i className="fa-solid fa-gauge"></i>
                        <span>Dashboard</span>
                    </button>

                    <button className="flex items-center gap-2">
                        <i className="fa-solid fa-chart-pie"></i>
                        <span>Chart</span>
                    </button>

                    <button className="flex items-center gap-2">
                        <i className="fa-solid fa-chart-pie"></i>
                        <span>Food Chart</span>
                    </button>

                    <button className="flex items-center gap-2">
                        <i className="fa-solid fa-chart-pie"></i>
                        <span>Sale Chart</span>
                    </button>

                </div>

                {/* RIGHT SIDE */}
                <h3 className="text-sm font-medium">
                    balance:-......
                </h3>

            </div>

            {/* GRID SECTION */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">

                {catagory && catagory.map((item) => {
                    return (
                        <Link
                            key={item.route}
                            to={item.route}
                            className="w-full"
                        >
                            <div className="relative aspect-square rounded overflow-hidden">

                                {/* IMAGE */}
                                <img
                                    src={item.Image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />

                                {/* DARK OVERLAY */}
                                <div className="absolute inset-0 bg-black/40"></div>

                                {/* TEXT */}
                                <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
                                    {item.name}
                                </span>

                            </div>
                        </Link>
                    );
                })}

            </div>

        </div>
    );
}

export default Dashboard;