import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoomsData from "../../Room";
import AddFoodForm from "./AddFood";
import Sidebaar2 from "../CheckInn/Sidebaar2";

const RoomFoodManager = () => {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomOrders, setRoomOrders] = useState({});

  const handleAddFood = (roomNumber, foodItem) => {
    setRoomOrders((prev) => ({
      ...prev,
      [roomNumber]: [...(prev[roomNumber] || []), foodItem],
    }));
  };

  const handleRoomClick = (room) => {
    if (room.status === "booked") {
      setSelectedRoom(room);
      navigate(`/food-menu/${room.number}`);
      return;
    }

    setSelectedRoom(room);
  };

  const tileBgClass = (status) => {
    if (status === "available") return "bg-white";
    if (status === "booked") return "bg-yellow-50";
    return "bg-red-50";
  };

  return (
    <div className="flex">
      <Sidebaar2 />

      <div className="p-6 bg-gray-100 min-h-screen w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">
          🍴 Add Food to Rooms
        </h1>

        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(RoomsData).map(([floor, rooms]) => (
            <div key={floor} className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-2">{floor}</h2>

              <div className="grid grid-cols-2 gap-2">
                {rooms.map((room) => (
                  <button
                    key={room.number}
                    onClick={() => handleRoomClick(room)}
                    className={`p-3 rounded ${tileBgClass(room.status)}`}
                  >
                    <div className="font-semibold">
                      Room {room.number}
                    </div>
                    <div className="text-sm text-gray-500">
                      {room.type}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedRoom && (
          <div className="mt-10">
            <AddFoodForm
              room={selectedRoom}
              onAddFood={(food) =>
                handleAddFood(selectedRoom.number, food)
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomFoodManager;