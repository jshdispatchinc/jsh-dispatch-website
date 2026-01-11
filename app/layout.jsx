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
    paddingTop: "70px",
    fontFamily: "'Segoe UI', Arial, sans-serif",
    backgroundColor: "#0f0f0f",
    color: "#e5e5e5",
    overflowX: "hidden",
  }}
>
        {children}
      </body>
    </html>
  );
}
