import { useState } from "react"
import Sidebar from "../Homepage/Sidebaar"


export default function LaundryLayout(props) {
    // console.log(props)

    let [AllData, setData] = useState(props.data)
    console.log(AllData)

    return (
        <>
           <div className="flex bg-gray-300">
            <Sidebar />
             <div className="w-[70%] bg-white h-130 my-13 mx-20">
                <h1 className="flex justify-center text-2xl bg-blue-500 text-amber-50">Room Details</h1>
            
                <div className="flex flex-wrap" >
                    {AllData && AllData.map((Item)=>{
                        return(
                        <>
                         <p className=" px-20 py-10 bg-blue-500 m-5 sm:col-span-4 text-xl font-bold " >{Item.Name}</p>
                        
                    
                        </>
                        )
                    })}
                </div>
                         </div>
           </div>
        </>
    )
}