import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    hotel: "",
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="min-h-screen flex">
      
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="w-96 bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Log In</h2>

          <input
            name="hotel"
            placeholder="Hotel Name"
            className="w-full mb-3 p-2 border rounded"
            onChange={handleChange}
          />

          <input
            name="username"
            placeholder="Username"
            className="w-full mb-3 p-2 border rounded"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full mb-4 p-2 border rounded"
            onChange={handleChange}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center">
        <img
          src="https://i.imgur.com/8Km9tLL.png"
          alt="Dashboard"
          className="w-3/4"
        />
      </div>

    </div>
  );
}
