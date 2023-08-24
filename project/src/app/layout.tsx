import "./globals.css";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-7 md:m-10 max-h-screen overscroll-none">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
