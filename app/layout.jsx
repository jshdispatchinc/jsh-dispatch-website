export const metadata = {
  title: "JSH Dispatch",
  description: "Professional Truck Dispatch Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          paddingTop: "70px", // 👈 THIS FIXES NAVBAR OVERLAP
          fontFamily: "Arial, sans-serif",
          overflowX: "hidden", // 👈 PREVENTS SIDE SCROLL
        }}
      >
        {children}
      </body>
    </html>
  );
}
