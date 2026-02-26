export const metadata = {
  title: "Kofannan Cargo & Logistics",
  description: "On-Demand Cargo Ride-Hailing Platform in Accra"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#111111",
          color: "white"
        }}
      >
        {children}
      </body>
    </html>
  );
}