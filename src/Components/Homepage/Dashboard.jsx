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

                <div className="sm:grid gap-4 sm:grid-cols-12 pl-5 pr-1 pb-0">

                    {catagory && catagory.map((item) => {
                        return (
                            <Link
                                key={item.route}
                                to={item.route}
                                className="w-full sm:col-span-3 my-5 h-30 text-xl text-center mt-5"
                            >
                                <div
                                    className="h-[140px] overflow-hidden"
                                    style={{
                                        backgroundImage: `url(${item.Image})`,
                                        color: "red"
                                    }}
                                >
                                    <img src={item.Image} alt="" width="100%" />
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