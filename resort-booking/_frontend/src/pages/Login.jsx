// src/pages/Login.jsx
// Luxurious but simple login UI with helpful comments for beginners.
// Auth not implemented — this is a UI-only placeholder until you integrate backend auth.

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // placeholder behaviour for beginners
    alert("Login not wired up yet — redirecting to rooms for demo.");
    nav("/rooms");
  }

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-md p-8 glass rounded-2xl border border-white/10 shadow-lux">
        <h2 className="text-3xl font-bold text-center text-gold mb-4">Welcome Back</h2>
        <p className="text-center text-gray-300 mb-6">Sign in to manage bookings & profile</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-200">Email</label>
            <input
              type="email"
              className="w-full mt-2 p-3 rounded-xl bg-white/5"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-200">Password</label>
            <input
              type="password"
              className="w-full mt-2 p-3 rounded-xl bg-white/5"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button className="w-full bg-gold text-black py-3 rounded-xl font-semibold">Sign in</button>
        </form>

        <div className="mt-4 text-center text-gray-400 text-sm">
          Don't have an account? <span className="text-white underline">Contact support</span>
        </div>
      </div>
    </div>
  );
}
