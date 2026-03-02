export const metadata = {
  title: "Kofannan Cargo & Logistics",
  description: "On-demand cargo ride-hailing in Accra"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial", background: "#111111", color: "white" }}>
        {children}
      </body>
    </html>
  );
}