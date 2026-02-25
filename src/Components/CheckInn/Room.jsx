import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RoomView = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  const hotelId = localStorage.getItem("Hotel ID");

  useEffect(() => {
    if (hotelId) {
      fetchRooms();
    }
  }, [hotelId]);

  const fetchRooms = async () => {
    try {
      const res = await axios.get(
        `/api/Room/Rooms/${hotelId}`
      );
      setRooms(res.data.rooms);
    } catch (err) {
      console.log(err);
    }
  };

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
    <div style={{ padding: "20px" }}>
      <h2>Room View</h2>

      <button
        onClick={() => navigate("/admin/add-room")}
        style={{
          padding: "10px 15px",
          background: "#2979ff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginBottom: "20px",
          cursor: "pointer"
        }}
      >
        Add Room
      </button>

      {Object.keys(groupedRooms).map((floor) => (
        <div key={floor} style={{ marginBottom: "30px" }}>
          <h3>Floor {floor}</h3>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            {groupedRooms[floor].map((room) => (
              <div
                key={room._id}
                onClick={() => {
                  if (room.status === "ready") {
                    navigate(`/checkin/${room._id}`);
                  }
                }}
                style={{
                  width: "140px",
                  padding: "15px",
                  borderRadius: "10px",
                  textAlign: "center",
                  color: "white",
                  background: getColor(room.status),
                  cursor:
                    room.status === "ready"
                      ? "pointer"
                      : "not-allowed",
                  opacity:
                    room.status === "ready"
                      ? 1
                      : 0.6
                }}
              >
                <h4>{room.roomNo}</h4>
                <p>{room.type}</p>
                {/* <p>₹{room.price}/night</p> */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomView;