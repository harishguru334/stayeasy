import Partymenu from "../../Partymenu"
import PartyLayout from "./PartyLayout"

function Partyinn() {


    return (
        <>
        <div className="" style={{ display:"flex", flexWrap: "wrap"}}>
            <PartyLayout data={Partymenu} />
        </div>
         
        </>
    )
}
export default Partyinn