export function reportPhoneConversion() {
  if (
    typeof window !== "undefined" &&
    typeof window.gtag === "function"
  ) {
    window.gtag("event", "conversion", {
      send_to: "AW-18309176041/VVpGCOv79NEcEOm1v5pE",
      value: 1.0,
      currency: "TRY",
    });

    console.log("Telefon dönüşümü Google Ads'e gönderildi.");
  } else {
    console.warn("Google Ads etiketi henüz yüklenmedi.");
  }
}

export function reportWhatsappConversion() {
  if (
    typeof window !== "undefined" &&
    typeof window.gtag === "function"
  ) {
    window.gtag("event", "conversion", {
      send_to: "AW-18309176041/GIvJCMeJitIcEOm1v5pE",
      value: 1.0,
      currency: "TRY",
    });

    console.log("WhatsApp dönüşümü Google Ads'e gönderildi.");
  } else {
    console.warn("Google Ads etiketi henüz yüklenmedi.");
  }
}