

// export default function FoodLayout(room, onClick) {
//     const isBooked = room.status === "booked";
//     const isAvailable = room.status === "available";
 
//     return(
//         <div className={`rounded-xl m-4 h-[80px] w-[230px] md:w-[150px] text-white shadow-md flex flex-col justify-center text-center cursor-pointer
//         ${isBooked ? "bg-blue-500 hover:bg-blue-700 "  : isAvailable ? "bg-green-400 hover:bg-green-700" : "bg-black"} 
//       `}
//         // style={{ width: "150px", height: "75px" }} // 👈 Fixed j
//         onClick={() => onClick(room)} // ✅ Dono clickable
//         >

//         </div>
//     );

// };