import "./globals.css";

export const metadata = {
  title: "Vision UI Dashboard",
  description: "Next.js + Tailwind dashboard boilerplate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className="bg-vision-bg">{children}</body>
    </html>
  );
}
