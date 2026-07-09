import "./globals.css";
import AOSProvider from "@/components/AOSProvider";
import { Montserrat, Playfair_Display } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: "YILDIZ VIP LUXURY | İstanbul VIP Transfer ve Özel Şoför",
  description:
    "İstanbul merkezli Türkiye geneli VIP transfer, havalimanı transferi, şehirler arası ulaşım, düğün ve kurumsal transfer hizmetleri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${montserrat.variable} ${playfair.variable}`}>
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}