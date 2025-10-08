import Sidebaar2 from "./Sidebaar2";

export default function RoomCard({ room, onClick }) {
  const isBooked = room.status === "booked";
  const isAvailable = room.status === "available";

  return (
    <div>
   
      <div
        className={`rounded-xl m-4 h-[100px] w-[230px] md:w-[150px] text-white shadow-md flex flex-col justify-center text-center cursor-pointer
        ${isBooked ? "bg-blue-500 hover:bg-blue-700 "  : isAvailable ? "bg-green-400 hover:bg-green-700" : "bg-black"} 
      `}
        // style={{ width: "150px", height: "75px" }} // 👈 Fixed size
        onClick={() => onClick(room)} // ✅ Dono clickable
      >
        {isBooked ? (
          <>
            <div className="flex justify-center items-center gap-1 p-0">
              <h3 className="text-xs font-bold">{room.number}</h3>
              <p className="text-sm">{room.guest}</p>
            </div>
            <p className="text-xs mt-1">₹{room.tariff} / night</p>
          </>
        ) : (
          <>
            <h3 className="text-lg font-bold">{room.number}</h3>
            <p className="text-sm">{room.type}</p>
          </>
        )}
      </div>
    </div>
  );
}
