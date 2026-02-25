import { useState } from "react";
import api from "../../../Api";

const DEFAULT_TARIFF = {
  STD: 2000,
  DLX: 2800,
  SD: 3200
};
const FLOORS = [1, 2, 3, 4, 5];


export default function AddRoom() {
  const [form, setForm] = useState({
    hotelId: "",
    floor: "",
    roomNo: "",
    type: "STD",
    price: DEFAULT_TARIFF.STD,
    status: "ready"
  });

 const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "type") {
          setForm((prev) => ({
        ...prev,
        type: value,
        price: DEFAULT_TARIFF[value]
      }));
    } else if (name === "floor" || name === "roomNo" || name === "price") {
      setForm((prev) => ({
        ...prev,
        [name]: Number(value)
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await api.post("/Room/add", form);
      alert(res.data.message);
      setForm({
        hotelId: "",
        floor: "",
        roomNo: "",
        type: "STD",
        price: DEFAULT_TARIFF.STD, // ✅ reset default
        status: "ready"
      });
    } catch (err) {
  console.log(err.response?.data);
  alert(err.response?.data?.message || "Error adding room");
}
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 md:p-8">

        {/* 🔷 Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Room
        </h2>

        {/* 🔷 Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            name="hotelId"
            placeholder="Hotel ID"
            value={form.hotelId}
            onChange={handleChange}
            className="input"
          />

          <input
            name="floor"
            placeholder="Floor"
            value={form.floor}
            onChange={handleChange}
            className="input"
          />

          <input
            name="roomNo"
            placeholder="Room Number"
            value={form.roomNo}
            onChange={handleChange}
            className="input"
          />

          <input
            name="price"
            placeholder="Price per night"
            value={form.price}
            onChange={handleChange}
            className="input"
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="input"
          >
            <option value="STD">Standard (STD)</option>
            <option value="DLX">Deluxe (DLX)</option>
            <option value="SD">Super Deluxe (SD)</option>
          </select>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="input"
          >
            <option value="ready">Ready to Book</option>
            <option value="blocked">Blocked</option>
          </select>
        </div>

        {/* 🔷 Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Add Room
        </button>

      </div>
    </div>
  );
}
