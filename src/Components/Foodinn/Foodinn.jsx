// RoomFoodManager.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoomsData from "../../Room";
import AddFoodForm from "./AddFood";

const RoomFoodManager = () => {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomOrders, setRoomOrders] = useState({}); // store food by room number

  const handleAddFood = (roomNumber, foodItem) => {
    setRoomOrders((prev) => ({
      ...prev,
      [roomNumber]: [...(prev[roomNumber] || []), foodItem],
    }));
  };

  const handleRoomClick = (room) => {
    // If booked -> redirect to food menu page for that room
    if (room.status === "booked") {
      // Optionally keep selection too
      setSelectedRoom(room);
      // navigate to route (you must create corresponding route for /food-menu/:roomNumber)
      navigate(`/food-menu/${room.number}`);
      return;
    }

    // For other statuses just select the room (no redirect)
    setSelectedRoom(room);
  };

  // Utility to choose background classes for full tile
  const tileBgClass = (status) => {
    if (status === "available") return "bg-white hover:bg-green-50";
    if (status === "booked") return "bg-yellow-50 hover:bg-yellow-100";
    return "bg-red-50 hover:bg-red-100"; // fallback / occupied
  };

  // Utility for a more vivid border when selected
  const selectedClass = (room) =>
    selectedRoom?.number === room.number ? "ring-2 ring-blue-500" : "border-gray-200";

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        🍴 Add Food to Rooms
      </h1>

      {/* ---------- ROOMS LIST ---------- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(RoomsData).map(([floor, rooms]) => (
          <div key={floor} className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{floor}</h2>
            <div className="grid grid-cols-2 gap-2">
              {rooms.map((room) => (
                <button
                  key={room.number}
                  onClick={() => handleRoomClick(room)}
                  className={`p-3 rounded-lg ${tileBgClass(
                    room.status
                  )} ${selectedClass(room)} text-left flex flex-col justify-between items-start transition`}
                >
                  {/* Top row: room number and status badge */}
                  <div className="w-full flex items-center justify-between">
                    <div className="font-semibold text-gray-800">Room {room.number}</div>

                    {/* status pill - optional but keeps clear label */}
                    <div
                      className={`text-xs text-white px-2 py-1 rounded-full w-fit ml-2 ${
                        room.status === "available"
                          ? "bg-green-600"
                          : room.status === "booked"
                          ? "bg-yellow-600 text-black"
                          : "bg-red-600"
                      }`}
                    >
                      {room.status}
                    </div>
                  </div>

                  {/* bottom info */}
                  <div className="mt-3 text-sm text-gray-500">{room.type}</div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ---------- ADD FOOD FORM ---------- */}
      {selectedRoom && (
        <div className="mt-10">
          <AddFoodForm
            room={selectedRoom}
            onAddFood={(food) => handleAddFood(selectedRoom.number, food)}
          />

          {/* Show added food list */}
          {roomOrders[selectedRoom.number]?.length > 0 && (
            <div className="mt-8 bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                🧾 Food Ordered for Room {selectedRoom.number}
              </h3>
              <ul className="space-y-2">
                {roomOrders[selectedRoom.number].map((food, i) => (
                  <li
                    key={i}
                    className="border rounded-lg p-3 flex justify-between"
                  >
                    <span>{food.name}</span>
                    <span className="text-gray-500">₹{food.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RoomFoodManager;
 