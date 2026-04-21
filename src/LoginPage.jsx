import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black">

      <div className="bg-black p-8 rounded-xl shadow-lg w-80 border border-green-500">

        <h2 className="text-green-400 text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label className="text-gray-300 text-sm">Username</label>
          <input
            type="text"
            className="w-full mt-1 p-2 bg-gray-800 border border-green-500 rounded text-white focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-300 text-sm">Password</label>
          <input
            type="password"
            className="w-full mt-1 p-2 bg-gray-800 border border-green-500 rounded text-white focus:outline-none"
          />
        </div>

        <button className="w-full bg-green-500 text-black py-2 rounded font-bold hover:bg-green-400 transition">
          Login
        </button>

      </div>

    </div>
  );
}