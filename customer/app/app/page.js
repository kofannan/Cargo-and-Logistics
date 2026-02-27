export default function Home() {
  return (
    <main style={{ padding: "60px", textAlign: "center" }}>
      <h1 style={{ color: "#D4A017", fontSize: "42px", marginBottom: "10px" }}>
        KOFANNAN
      </h1>

      <p style={{ fontSize: "20px", marginBottom: "40px" }}>
        On-Demand Cargo & Logistics Platform in Accra
      </p>

      <div>
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
  backgroundColor: "#D4A017",
  padding: "15px 30px",
  color: "white",
  textDecoration: "none",
  borderRadius: "6px",
  fontWeight: "bold"
};