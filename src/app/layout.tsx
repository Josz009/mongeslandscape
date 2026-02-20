import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monge's Landscape | Professional Landscape Services in Houston",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
