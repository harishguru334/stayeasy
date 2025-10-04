import { useState } from "react"
import { Link } from "react-router-dom"
import Sidebaar3 from "../Dineinn/TableSidebaar"


export default function Foodlayout(props) {
    // console.log(props)

    let [AllData, setData] = useState(props.data)
    console.log(AllData)

    return (
        <>
            <div className="flex bg-gray-300">
                <Sidebaar3 />
                <div className="w-[53%] bg-white h-130 my-13 mx-20">
                    <h1 className="flex justify-center text-2xl  bg-blue-500 text-amber-50">Room Details</h1>

                    <div className="flex flex-wrap" >
                        {AllData && AllData.map((Item) => {
                            return (
                                <>
                                    <Link to={Item.Route}><p className=" px-20 py-10 bg-blue-500 m-5 sm:col-span-4 text-xl font-bold " >{Item.Name}</p>
                                    </Link>

                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}