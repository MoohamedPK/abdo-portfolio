import "./globals.css";

import LenisProvider from "@/providers/LenisProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased `}
      >
          <LenisProvider/>
            {children}
      </body>
    </html>
  );
}

// bg-primary-accent text-background/75
