// src/components/BookingForm.jsx
// A large, well-documented, beginner-friendly booking form UI.
// Props:
//  - room: object with { id, name, pricePerNight }
//  - onSubmit: function called with booking payload { roomId, name, email, fromDate, toDate }
// Usage:
//  <BookingForm room={room} onSubmit={handleBooking} />

import React, { useState } from "react";

export default function BookingForm({ room, onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    fromDate: "",
    toDate: "",
    guests: 2,
    notes: "",
  });

  // Basic client-side validation (beginner-friendly)
  function validate() {
    if (!form.name.trim()) return "Please enter your full name.";
    if (!form.email.includes("@")) return "Please enter a valid email address.";
    if (!form.fromDate || !form.toDate) return "Please choose check-in and check-out dates.";
    if (new Date(form.fromDate) > new Date(form.toDate)) return "Check-out must be after check-in.";
    return null;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) {
      alert(err);
      return;
    }
    // Build payload and send to parent
    const payload = {
      roomId: room?.id,
      customerName: form.name,
      customerEmail: form.email,
      fromDate: form.fromDate,
      toDate: form.toDate,
      guests: form.guests,
      notes: form.notes,
    };
    onSubmit(payload);
  }

  return (
    <div className="glass p-8 rounded-2xl border border-white/10 shadow-lux">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gold">Reserve {room?.name || "Room"}</h3>
          <p className="text-sm text-gray-300">
            Price per night: <span className="font-semibold">₹{room?.pricePerNight || "-"}</span>
          </p>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400">Total estimate</div>
          <div className="text-lg font-bold text-white">
            {/* simple estimate for UX */}
            ₹
            {room?.pricePerNight
              ? Math.max(1, diffDays(form.fromDate, form.toDate)) * room.pricePerNight
              : "-"}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-200 text-sm">Full name</label>
          <input
            className="w-full mt-2 p-3 rounded-xl bg-white/5 focus:outline-none"
            placeholder="John Doe"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-gray-200 text-sm">Email</label>
          <input
            type="email"
            className="w-full mt-2 p-3 rounded-xl bg-white/5 focus:outline-none"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-200 text-sm">Check-in</label>
            <input
              type="date"
              className="w-full mt-2 p-3 rounded-xl bg-white/5"
              value={form.fromDate}
              onChange={(e) => setForm({ ...form, fromDate: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-gray-200 text-sm">Check-out</label>
            <input
              type="date"
              className="w-full mt-2 p-3 rounded-xl bg-white/5"
              value={form.toDate}
              onChange={(e) => setForm({ ...form, toDate: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-200 text-sm">Guests</label>
            <select
              className="w-full mt-2 p-3 rounded-xl bg-white/5"
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
            >
              {[1, 2, 3, 4, 5].map((g) => (
                <option key={g} value={g}>
                  {g} {g === 1 ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-200 text-sm">Promo code</label>
            <input
              placeholder="Optional code"
              className="w-full mt-2 p-3 rounded-xl bg-white/5"
              value={form.promo}
              onChange={(e) => setForm({ ...form, promo: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-200 text-sm">Notes (requests)</label>
          <textarea
            rows="3"
            className="w-full mt-2 p-3 rounded-xl bg-white/5"
            placeholder="Late check-in, food preferences..."
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gold text-black py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

// helper to calculate difference in days (inclusive)
function diffDays(a, b) {
  if (!a || !b) return 1;
  const dateA = new Date(a);
  const dateB = new Date(b);
  const diff = Math.ceil((dateB - dateA) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 1;
}
