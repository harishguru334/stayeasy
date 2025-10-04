import TableData from "../../table"
import Tablelayout from "./TableLayout"

function Table() {


    return (
        <>
        <div className="" style={{ display:"flex", flexWrap: "wrap"}}>
            <Tablelayout data={TableData} />
        </div>
         
        </>
    )
}
export default Table