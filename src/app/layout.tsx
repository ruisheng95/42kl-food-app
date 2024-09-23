import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Welcome to ABC`,
  description: `Welcome to ABC. TODO`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
