import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebaar2 from "./Sidebaar2";

const Romm_veiw = () => {

  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();
  const hotelId = localStorage.getItem("Hotel ID");

  const fetchRooms = async () => {
    try {
      const res = await axios.get(`/api/Room/Rooms/${hotelId}`);
      setRooms(res.data.rooms);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (hotelId) {
      fetchRooms();
    }
  }, [hotelId]);

  const groupedRooms = rooms.reduce((acc, room) => {
    if (!acc[room.floor]) {
      acc[room.floor] = [];
    }
    acc[room.floor].push(room);
    return acc;
  }, {});

  const getColor = (status) => {
    switch (status) {
      case "ready":
        return "#16c60c";
      case "occupied":
        return "#2979ff";
      case "blocked":
        return "#000000";
      case "dirty":
        return "#ff9800";
      default:
        return "#ccc";
    }
  };

  return (
    <div className="flex">
      <Sidebaar2 />

      <div className="p-6 w-300 bg-slate-200 h-screen overflow-scroll">

        <button
          onClick={() => navigate("/admin/add-room")}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-5"
        >
          Add Room
        </button>

        {Object.keys(groupedRooms).map((floor) => (
          <div key={floor} className="mb-8">
            <h3 className="font-bold mb-4">Floor {floor}</h3>

            <div className="flex flex-wrap gap-4">
              {groupedRooms[floor].map((room) => (
                <div
                  key={room._id}
                  onClick={() => {
                    if (room.status === "ready") {
                      navigate(`/checkin/${room._id}`);
                    }
                  }}
                  className="w-36 p-4 rounded text-center text-white cursor-pointer"
                  style={{
                    background: getColor(room.status),
                    opacity: room.status === "ready" ? 1 : 0.6
                  }}
                >
                  <h4>{room.roomNo}</h4>
                  <p>{room.type}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Romm_veiw;