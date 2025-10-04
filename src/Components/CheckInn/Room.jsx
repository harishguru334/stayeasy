import { useState } from "react";
import RoomsData from "../../Room";
import RoomCard from "./RoomCard";
import CheckInForm from "./checkinn";
import Sidebaar2 from "./Sidebaar2";

export default function Room() {
    const [selectedRoom, setSelectedRoom] = useState(null);

    return (
        <div className="flex">
            <Sidebaar2 />
            <div className="p-6 w-300 bg-slate-200 min-h-screen">

                <h2 className="text-2xl font-bold mb-4 text-center ">Room View </h2>

                <div className="grid grid-cols-3 gap-6">
                    {Object.entries(RoomsData).map(([floor, Rooms]) => (
                        <div key={floor} className="bg-white p-3 rounded-lg shadow-md">
                            <h3 className="font-semibold mb-3">
                                {floor}{" "}
                                <span className="text-gray-500 text-sm">({Rooms.length} Rooms)</span>
                            </h3>

                            <div className="grid grid-cols-2 p-2 gap-6 justify-items-center ">
                                {Rooms.map((room) => (
                                    <RoomCard
                                        key={room.number}
                                        room={room}
                                        onClick={(room) => setSelectedRoom(room)} // click handler
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 👇 Yeh hamesha map ke bahar hoga */}
                {selectedRoom && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white w-[100%] max-h-[100vh] overflow-y-auto">
                            {selectedRoom.status === "available" ? (
                                <CheckInForm
                                    room={selectedRoom}
                                    onClose={() => setSelectedRoom(null)}
                                />
                            ) : (
                                <CheckOutForm
                                    room={selectedRoom}
                                    onClose={() => setSelectedRoom(null)}
                                />
                            )}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
