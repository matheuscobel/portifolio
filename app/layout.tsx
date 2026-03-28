import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matheus Cobel - Portfolio",
  description: "Portfolio de Matheus Cobel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Indie+Flower&family=Nabla&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        />
      </head>
      <body className="min-h-full bg-background font-body text-on-background selection:bg-tertiary-container selection:text-on-tertiary-container">
        {children}
      </body>
    </html>
  );
}
