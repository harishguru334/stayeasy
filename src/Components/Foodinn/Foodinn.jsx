import { useState } from "react";
import Sidebaar2 from "../CheckInn/Sidebaar2";

export default function Food_Inn() {
    let [selectedRoom, setSelectedRoom] = useState(null)

    return(
        <div className="flex">
            <Sidebaar2 />
            <div className="w-[82%] bg-slate-200 min-h-screen">
                  <h2 className="text-2xl font-bold mb-4 text-center ">Room View </h2>

                  <div className="md:grid md:gird-cols-5">

                  </div>

            </div>
        
        
        </div>
    )
};