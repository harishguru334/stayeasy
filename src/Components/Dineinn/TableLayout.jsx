import { useState } from "react"

import Sidebaar2 from "../CheckInn/Sidebaar2"


export default function Tablelayout(props) {
    // console.log(props)

    let [AllData, setData] = useState(props.data)
    console.log(AllData)

    return (
        <>
            <div className="flex bg-gray-300">
                <Sidebaar2 />
                <div className="w-[70%] bg-white h-130  my-13 mx-20">
                    <h1 className="flex justify-center text-2xl bg-blue-500 text-amber-50 ">Table Details</h1>
                    <div className="flex flex-wrap ml-10" >
                        {AllData && AllData.map((Item) => {
                            return (
                                <>
                                    <p className=" rounded-xl px-20 py-10 bg-green-500 m-5 sm:col-span-4 text-xl font-bold " >{Item.Table}</p>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
