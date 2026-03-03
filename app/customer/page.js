"use client";

import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function CustomerPage() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [distance, setDistance] = useState("");
  const [surge, setSurge] = useState(1);
  const [fare, setFare] = useState(null);
  const [loading, setLoading] = useState(false);

  const BASE_FARE = 50;
  const PER_KM_RATE = 10;

  const calculateFare = async () => {
    if (!pickup || !dropoff || !distance) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const hour = new Date().getHours();
    let surgeMultiplier = 1;

    if (hour >= 17 && hour <= 20) {
      surgeMultiplier = 1.5;
    }

    setSurge(surgeMultiplier);

    const total =
      (BASE_FARE + Number(distance) * PER_KM_RATE) * surgeMultiplier;

    setFare(total);

    try {
      await addDoc(collection(db, "bookings"), {
        pickup,
        dropoff,
        distance: Number(distance),
        baseFare: BASE_FARE,
        perKmRate: PER_KM_RATE,
        surge: surgeMultiplier,
        totalFare: total,
        status: "pending",
        createdAt: serverTimestamp(),
      });

      alert("Booking saved successfully!");
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Error saving booking");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
      <h2 style={{ color: "#D4A017", fontSize: "28px" }}>
        Book a Cargo Ride
      </h2>

      <input
        type="text"
        placeholder="Pickup Location"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Dropoff Location"
        value={dropoff}
        onChange={(e) => setDropoff(e.target.value)}
        style={inputStyle}
      />

      <input
        type="number"
        placeholder="Distance (km)"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        style={inputStyle}
      />

      <button onClick={calculateFare} style={buttonStyle}>
        {loading ? "Processing..." : "Calculate & Book"}
      </button>

      {fare !== null && (
        <div style={{ marginTop: "20px" }}>
          <p>Base Fare: GHS {BASE_FARE}</p>
          <p>Surge Multiplier: x{surge}</p>
          <h3>Total Fare: GHS {fare}</h3>
        </div>
      )}

      <a href="/" style={{ display: "block", marginTop: "30px", color: "#D4A017" }}>
        ← Back to Home
      </a>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "20px",
  backgroundColor: "#D4A017",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontWeight: "bold",
  cursor: "pointer"
};