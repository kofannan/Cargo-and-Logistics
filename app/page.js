export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ color: "#D4A017", fontSize: "40px" }}>
        KOFANNAN
      </h1>
      <p style={{ fontSize: "20px" }}>
        On-Demand Cargo & Logistics Platform
      </p>

      <div style={{ marginTop: "40px" }}>
        <a href="/customer" style={buttonStyle}>
          Customer
        </a>
        <a href="/driver" style={{ ...buttonStyle, marginLeft: "20px" }}>
          Driver
        </a>
      </div>
    </main>
  );
}

const buttonStyle = {
  background: "#D4A017",
  padding: "15px 30px",
  color: "white",
  textDecoration: "none",
  borderRadius: "6px"
};