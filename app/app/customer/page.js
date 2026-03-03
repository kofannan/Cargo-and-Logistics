"use client";

import { useState } from "react";

export default function CustomerPage() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [distance, setDistance] = useState("");
  const [surge, setSurge] = useState(1);
  const [fare, setFare] = useState(null);

  const BASE_FARE = 50; // Your new base fare
  const PER_KM_RATE = 10;

  const calculateFare = () => {
    if (!distance) return;

    // Automatic surge logic (example: busy hours simulation)
    const hour = new Date().getHours();
    let surgeMultiplier = 1;

    if (hour >= 17 && hour <= 20) {
      surgeMultiplier = 1.5; // Evening rush
    }

    setSurge(surgeMultiplier);

    const total =
      (BASE_FARE + distance * PER_KM_RATE) * surgeMultiplier;

    setFare(total);
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
        onChange={(e) => setDistance(Number(e.target.value))}
        style={inputStyle}
      />

      <button onClick={calculateFare} style={buttonStyle}>
        Calculate Fare
      </button>

      {fare && (
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