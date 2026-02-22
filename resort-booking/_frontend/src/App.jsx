import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Booking from "./pages/Booking";
import Login from "./pages/Login";

export default function App() {
  return (
    <div className="min-h-screen bg-luxury text-white">
      <Navbar />
      <main className="pt-24 container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/booking/:roomId" element={<Booking />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}
