import { Link } from "react-router-dom";
import catagory from "../../Catagory";

function Dashboard() {

    const data = [{}]

    return (
        <>
            <div className="bg-gray-200 m-3 my-7">
                <div className="flex justify-left text-xs p-2  bg-white-1000" >
                    <button><i class="fa-solid fa-gauge"></i> Dashboard</button>
                    <button className="ml-2"><i class="fa-solid fa-chart-pie"></i> Chart</button>
                </div>
                <div className="sm:grid gap-4 sm:grid-cols-12 px-7 pl-15 py-5 pb-15">
                    {catagory && catagory.map((item) => {
                        return (
                            <>
                                <Link to={`${item.route}`} className="w-55 sm:col-span-3  h-30 rounded-3xl bg-red-600 text-bold text-white text-xl text-center  m-5"> <div className="" style={{ backgroundImage: `url(${item.Image})`, color: "red" }}>
                                    <img src={item.Image} alt="" width={"100%"} />
                                </div></Link>
                            </>
                        )
                    })}

                </div>
            </div>

        </>
    )
}
export default Dashboard;