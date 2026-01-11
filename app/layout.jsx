export const metadata = {
  title: "JSH Dispatch Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#fff",
          color: "#111",
        }}
      >
        {children}
      </body>
    </html>
  );
}
