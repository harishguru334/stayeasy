import { Link } from "react-router-dom";
import catagory from "../../Catagory";

function Dashboard() {

    return (
        <>
            <div className="bg-gray-200 h-[87vh] overflow-scroll m-3 mt-7 pr-5 sm:pr-14">

                <div className="flex justify-between items-center">

                    <div className="flex items-center gap-6 text-sm p-2">

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

                    <h3 className="text-sm">
                        balance:-......
                    </h3>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

                    {catagory && catagory.map((item) => {
                        return (
                            <Link
                                key={item.route}
                                to={item.route}
                                className="w-full"
                            >
                                <div
                                    className="aspect-square flex items-center justify-center text-white text-lg font-semibold rounded"
                                    style={{
                                        backgroundImage: `url(${item.Image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}
                                >
                                    {item.name}
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