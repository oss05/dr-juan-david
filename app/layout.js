import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const timeless = localFont({
  src: [
    {
      path: "./fonts/timeless/Timeless.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/timeless/Timeless-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-timeless",
});

const quicksand = localFont({
  src: [
    {
      path: "./fonts/quicksand/Quicksand-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/quicksand/Quicksand-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-quicksand",
});

export const metadata = {
  title: "Dr. Juan David website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${timeless.variable} ${quicksand.variable} font-sansmono`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
