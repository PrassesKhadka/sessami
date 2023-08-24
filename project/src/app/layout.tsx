import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-7 md:m-10">
        <main>{children}</main>
      </body>
    </html>
  );
}