import TableData from "../../table"
import GardenLayout from "./GardenLayout"


function GardenTable() {


    return (
        <>
        <div className="" style={{ display:"flex", flexWrap: "wrap"}}>
            <GardenLayout data={TableData} />
        </div>
         
        </>
    )
}
export default GardenTable