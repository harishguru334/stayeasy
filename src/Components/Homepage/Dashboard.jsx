import { Link } from "react-router-dom";
import catagory from "../../Catagory";

function Dashboard() {

    const data = [{}]

    return (
        <>
            <div className="bg-gray-200 h-[87vh] overflow-scroll m-3 mt-7 pr-5 sm:pr-14 ">
                <div className="flex justify-between" >
                    <div className="flex justify-left text-xs p-2  bg-white-1000" >
                        <button onClick={""} className="w-15" ><i className="fa-solid fa-gauge"></i> Dashboard</button>
                        <button onClick={""} className="sm:w-20 ml-2"><i className="fa-solid fa-chart-pie"></i> <br /> Chart</button>
                        <button onClick={""} className="sm:w-20 mt-4 ml-2"><i className="fa-solid fa-chart-pie"></i> <br />Food Chart</button>
                        <button onClick={""} className="sm:w-20 mt-4 ml-2"><i className="fa-solid fa-chart-pie"></i> <br /> Sale Chart</button>

                    </div>
                    <h3 className=" pt-4.5 p-1" >balance:-......</h3>
                </div>

                <div className="  sm:grid gap-4 sm:grid-cols-12 pl-5 pr-1 pb-0">
                    {catagory && catagory.map((item) => {
                        return (
                            <>
                                <Link to={`${item.route}`} className="w-[100%]  sm:col-span-3 my-5 h-30   text-xl text-center  mt-5 "> <div className="h-[140px] overflow-hidden " style={{ backgroundImage: `url(${item.Image})`, color: "red" }}>
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