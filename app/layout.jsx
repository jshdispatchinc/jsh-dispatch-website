import "./globals.css";

export const metadata = {
  title: "JSH Dispatch",
  description: "Professional Truck Dispatch Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
