import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ username: "", Hotelid: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Data:", form);
    // 👇 yahan aap API call ya authentication add kar sakte ho
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white shadow-2xl rounded-2xl w-[400px] p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
            alt="Hotel Logo"
            className="w-16 h-16"
          />
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-bold text-gray-700 mb-2">
          HotelEase
        </h2>
        <p className="text-center text-gray-500 mb-6">Login to continue</p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600">
              Hotel I'd
            </label>
            <input
              type="text"
              placeholder="Enter Hotel I'd"
              value={form.Hotelid}
              onChange={(e) =>
                setForm({ ...form, Hotelid: e.target.value })
              }
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
            <label className="text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              value={form.username}
              onChange={(e) =>
                setForm({ ...form, username: e.target.value })
              }
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-6">
          © 2025 HotelEase. All rights reserved.
        </p>
      </div>
    </div>
  );
}
