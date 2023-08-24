import "./globals.css";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mt-7 ml-7 mr-7 mb-0 md:mr-10 md:ml-10 md:mt-10 md:mb-0 max-h-screen overscroll-none">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
