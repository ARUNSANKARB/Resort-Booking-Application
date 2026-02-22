import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import BookingForm from "../components/BookingForm";
import { motion } from "framer-motion";

export default function Booking() {
  const { roomId } = useParams();
  const nav = useNavigate();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!roomId) return;
    setLoading(true);
    api.get(`/api/rooms/${roomId}`)
      .then(res => setRoom(res.data))
      .catch(err => alert("Could not load room: " + err.message))
      .finally(() => setLoading(false));
  }, [roomId]);

  function handleBooking(payload) {
    api.post("/api/bookings", payload)
      .then(() => {
        alert("Booking successful! (Simulated confirmation)");
        nav("/rooms");
      })
      .catch(err => alert("Booking failed: " + err.message));
  }

  if (loading) return <div className="py-20">Loading room...</div>;
  if (!room) return <div className="py-20">Room not found.</div>;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="h-96 rounded-2xl bg-cover bg-center shadow-lux" style={{ backgroundImage: `url(${room.imageUrl || "https://images.unsplash.com/photo-1501117716987-c8e1ecb2105a"})` }} />
          <h1 className="mt-6 text-3xl font-bold">{room.name}</h1>
          <p className="mt-3 text-gray-300">{room.description}</p>
          <div className="mt-4">
            <span className="text-sm text-gray-400">Price</span>
            <div className="text-gold text-2xl font-bold">₹{room.pricePerNight} / night</div>
          </div>
        </div>

        <div>
          <BookingForm room={room} onSubmit={handleBooking} />
        </div>
      </div>
    </motion.div>
  );
}
