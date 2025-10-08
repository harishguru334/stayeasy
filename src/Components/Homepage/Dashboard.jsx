import { Link } from "react-router-dom";
import catagory from "../../Catagory";

function Dashboard() {

    const data = [{}]

    return (
        <>
            <div className="bg-gray-200 m-3 my-7 pr-5">
                <div className="flex justify-between" >
                    <div className="flex justify-left text-xs p-2  bg-white-1000" >
                        <button onClick={""} ><i className="fa-solid fa-gauge"></i> Dashboard</button>
                        <button onClick={""} className="ml-2"><i className="fa-solid fa-chart-pie"></i> Chart</button>
                        <button onClick={""} className="ml-2"><i className="fa-solid fa-chart-pie"></i> Food Chart</button>
                        <button onClick={""} className="ml-2"><i className="fa-solid fa-chart-pie"></i> Sale Chart</button>

                    </div>
                    <h3 className="mr-10 p-2" >balance :- ......</h3>
                </div>

                <div className=" sm:grid gap-4 sm:grid-cols-12 pr-6 pb-15">
                    {catagory && catagory.map((item) => {
                        return (
                            <>
                                <Link to={`${item.route}`} className="w-[100%] sm:col-span-3 my-5 h-30  text-xl text-center  m-5"> <div className="h-[140px] overflow-hidden " style={{ backgroundImage: `url(${item.Image})`, color: "red" }}>
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