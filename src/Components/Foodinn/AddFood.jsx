import React, { useState } from "react";

const AddFoodForm = () => {
  const [foodData, setFoodData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    gst: "",
    available: true,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFoodData({
      ...foodData,
      [name]: type === "file" ? files[0] : type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Food item added successfully (frontend only)");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row justify-center items-start p-8 space-y-6 lg:space-y-0 lg:space-x-8">
      {/* ---------- FORM SECTION ---------- */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          🍽️ Add Food Item
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Food Name */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Food Name</label>
            <input
              type="text"
              name="name"
              value={foodData.name}
              onChange={handleChange}
              required
              placeholder="Enter food name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Category</label>
            <select
              name="category"
              value={foodData.category}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Category</option>
              <option value="Starter">Starter</option>
              <option value="Main Course">Main Course</option>
              <option value="Dessert">Dessert</option>
              <option value="Beverage">Beverage</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Description</label>
            <textarea
              name="description"
              value={foodData.description}
              onChange={handleChange}
              rows="3"
              placeholder="Short description..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          {/* Price & GST */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Price (₹)</label>
              <input
                type="number"
                name="price"
                value={foodData.price}
                onChange={handleChange}
                required
                placeholder="Enter price"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">GST (%)</label>
              <input
                type="number"
                name="gst"
                value={foodData.gst}
                onChange={handleChange}
                placeholder="e.g. 5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="available"
              checked={foodData.available}
              onChange={handleChange}
              className="h-5 w-5 text-blue-500"
            />
            <label className="text-gray-700 font-medium">Available</label>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Food Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Add Food Item
          </button>
        </form>
      </div>

      {/* ---------- PREVIEW SECTION ---------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Preview
        </h3>
        {foodData.image && (
          <img
            src={URL.createObjectURL(foodData.image)}
            alt="Food Preview"
            className="rounded-lg w-full h-48 object-cover mb-4"
          />
        )}
        <div className="space-y-2">
          <p><span className="font-medium">Name:</span> {foodData.name || "-"}</p>
          <p><span className="font-medium">Category:</span> {foodData.category || "-"}</p>
          <p><span className="font-medium">Description:</span> {foodData.description || "-"}</p>
          <p><span className="font-medium">Price:</span> ₹{foodData.price || "0"}</p>
          <p><span className="font-medium">GST:</span> {foodData.gst || "0"}%</p>
          <p>
            <span className="font-medium">Available:</span>{" "}
            {foodData.available ? "✅ Yes" : "❌ No"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddFoodForm;
