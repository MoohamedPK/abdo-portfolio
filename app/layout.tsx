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
        className={`antialiased bg-[#780606] text-background/75`}
      >
        <LenisProvider/>
          {children}
      </body>
    </html>
  );
}
