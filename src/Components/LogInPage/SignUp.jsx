import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../../Api";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    hotelId: "",
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!form.hotelId || !form.username || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await Api.post("/user/login", form);
      alert(res.data.message);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">

        {/* 🔵 LEFT PANEL */}
       <div className="hidden md:flex md:w-2/5 bg-gradient-to-br from-indigo-600 to-indigo-500 text-white flex-col items-center justify-center p-10 relative">

          <div className="hidden md:block absolute right-[-40px] top-0 h-full w-[80px] bg-white rounded-l-full"></div>

          <h2 className="text-lg font-medium mb-2 opacity-90">
            Welcome Back
          </h2>
          <h1 className="text-4xl font-bold mb-4 tracking-wide">
            HotelEase
          </h1>
          <p className="text-sm max-w-xs opacity-90">
            Login to manage your hotel dashboard and daily operations with ease.
          </p>
        </div>

        {/* ⚪ RIGHT FORM */}
      <div className="w-full md:w-3/5 flex flex-col justify-center px-6 sm:px-12 py-10">

          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 text-center md:text-left">
            Login to Your Account
          </h2>

          <div className="space-y-4">
            <input
              name="hotelId"
              placeholder="Hotel ID"
              value={form.hotelId}
              onChange={handleChange}
              className="input"
            />

            <input
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="input"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="input"
            />
          </div>

          <button
            onClick={handleLogin}
            className="mt-6 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200 active:scale-95"
          >
            Login
          </button>

          <p className="text-sm text-gray-600 mt-5 text-center">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-indigo-600 font-semibold cursor-pointer hover:underline"
            >
              Sign up
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}
