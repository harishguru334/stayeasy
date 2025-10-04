import RoomData from "../../Data"
import LaundryLayout from "./LaundryLayout"


function Laundry() {
 
    console.log(RoomData)

    return (
        <>
        <div className="" style={{ display:"flex", flexWrap: "wrap"}}>
            <LaundryLayout data={RoomData} />
        </div>
         
        </>
    )
}
export default Laundry