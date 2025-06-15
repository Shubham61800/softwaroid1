import "./globals.css";
import { Poppins } from "next/font/google";
export const metadata = {
  title: "Softwaroid",
  description: "The ultimate Security Consulting Service",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", // this creates a CSS variable
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
