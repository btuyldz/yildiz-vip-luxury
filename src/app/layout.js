import "./globals.css";
import AOSProvider from "@/components/AOSProvider";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Montserrat, Playfair_Display } from "next/font/google";
import Script from "next/script";

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
        <LanguageProvider>
          <AOSProvider />
          {children}
        </LanguageProvider>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18309176041"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-18309176041');
          `}
        </Script>
      </body>
    </html>
  );
}