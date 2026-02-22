import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import room1 from "../assets/rooms/1-bedroom-pool-villa-2.jpg";
import room2 from "../assets/rooms/download (1).jpg";
import room3 from "../assets/rooms/download (2).jpg";
import room4 from "../assets/rooms/download (3).jpg";
import room5 from "../assets/rooms/download (4).jpg";
import room6 from "../assets/rooms/download (5).jpg";
import room7 from "../assets/rooms/download (6).jpg";

const roomImages = [room1, room2, room3, room4, room5, room6, room7];

export default function RoomCard({ room }) {
  // Use room ID to select an image, cycling through available images
  const roomIndex = room.id ? (room.id - 1) % roomImages.length : 0;
  const roomImage = roomImages[roomIndex];

  return (
    <motion.article
      className="bg-white/5 p-5 rounded-2xl border border-white/8 room-card-hover overflow-hidden flex flex-col h-full hover:border-gold/30 transition-all"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220 }}
      layout
    >
      <div className="relative w-full h-48 rounded-xl mb-4 overflow-hidden bg-gray-800 flex-shrink-0">
        <img
          src={roomImage}
          alt={room.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col justify-between flex-grow">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{room.name}</h3>
          <p className="mt-2 text-xs text-gray-300 line-clamp-2">{room.description}</p>

          <div className="mt-3 space-y-2">
            {room.bedCount && (
              <div className="text-xs text-gray-400 flex items-center gap-2">
                <span>🛏️</span> {room.bedCount} Bed{room.bedCount > 1 ? 's' : ''}
              </div>
            )}
            {room.capacity && (
              <div className="text-xs text-gray-400 flex items-center gap-2">
                <span>👥</span> Capacity: {room.capacity} guests
              </div>
            )}
            {room.amenities && (
              <div className="text-xs text-gray-400 flex items-center gap-2">
                <span>✨</span> {room.amenities}
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/5">
          <div className="text-gold font-bold text-xl">₹{room.pricePerNight}</div>
          <div className="text-xs text-gray-400">per night</div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <Link to={`/booking/${room.id}`} className="btn-gold flex-1 font-semibold px-3 py-2 rounded-lg text-center text-sm hover:bg-gold/90 transition">Book Now</Link>
        <Link to={`/rooms`} className="flex-1 py-2 px-3 rounded-lg border border-white/10 text-xs hover:border-gold/50 hover:text-gold transition text-center">Details</Link>
      </div>
    </motion.article>
  );
}
