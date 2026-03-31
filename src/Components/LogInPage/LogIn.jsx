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
      const res = await Api.post("/api/user/login", form);
      const user = res.data.user;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("Hotel ID", res.data.user.hotelId);

      alert(res.data.message);
      console.log(res.data.user.hotelId);


      // 🔀 ROLE BASED REDIRECT
      if (user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">

        {/* 🔵 LEFT PANEL (DESKTOP ONLY) */}
        <div className="hidden md:flex md:w-2/5 bg-gradient-to-br from-indigo-600 to-indigo-500 text-white flex-col items-center justify-center p-10 relative">
          <div className="absolute right-[-40px] top-0 h-full w-[80px] bg-white rounded-l-full"></div>

          <h2 className="text-xl font-semibold mb-2">Welcome Back</h2>
          <h1 className="text-3xl font-bold mb-4">HotelEase</h1>
          <p className="text-sm text-center opacity-90">
            Login to manage your hotel dashboard and daily operations.
          </p>
        </div>

        {/* ⚪ RIGHT FORM */}
        <div className="w-full md:w-3/5 flex flex-col justify-center px-6 sm:px-12 py-10">

          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center md:text-left">
            Login to Your Account
          </h2>

          <input
            name="hotelId"
            placeholder="Hotel ID"
            value={form.hotelId}
            onChange={handleChange}
            className="mb-3 p-3 border-4 rounded"
          />

          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="mb-3 p-3 border rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="mb-5 p-3 border rounded"
          />

          <button
            onClick={handleLogin}
            className="bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
          >
            Login
          </button>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-indigo-600 font-medium cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}
