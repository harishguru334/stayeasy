import TableData from "../../table"
import BaarLayout from "./BaarLayout"

function Baar() {


    return (
        <>
        <div className="" style={{ display:"flex", flexWrap: "wrap"}}>
            <BaarLayout data={TableData} />
        </div>
         
        </>
    )
}
export default Baar