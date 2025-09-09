// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Universidad Demo",
  description: "Demo estática moderna para universidad",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
