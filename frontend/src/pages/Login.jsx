import React, { useState } from "react";
import useAuth from "../hooks/useAuth.js";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl mb-6 text-center font-bold">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded"
          type="submit"
        >
          Login
        </button>
        <div className="flex items-center justify-center space-x-2">
          <div className="p-2 text-gray-700">New user?</div>
          <div className="p-2 text-blue-500 cursor-pointer hover:text-blue-700 hover:underline">
            <Link to="/register">Register</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
