import React, { useEffect, useState } from "react";
import api from "../api/axios";
import RoomCard from "../components/RoomCard";
import { motion } from "framer-motion";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.get("/api/rooms")
      .then(res => setRooms(res.data || []))
      .catch(err => alert("Could not fetch rooms: " + err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Rooms & Villas</h1>
        <p className="text-gray-300 mt-2">Choose your perfect room — from cozy deluxe to private villas.</p>
      </header>

      {loading ? (
        <div>Loading rooms...</div>
      ) : (
        <motion.div initial="hidden" animate="visible" variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } }
        }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {rooms.map(room => (
            <motion.div key={room.id} variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 }
            }}>
              <RoomCard room={room} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
