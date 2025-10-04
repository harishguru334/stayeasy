import RoomData from "../../Data"
import Foodlayout from "./FoodLayout"

function Food() {


    return (
        <>
        <div className="" style={{ display:"flex", flexWrap: "wrap" }}>
            <Foodlayout data={RoomData} />
        </div>
         
        </>
    )
}
export default Food