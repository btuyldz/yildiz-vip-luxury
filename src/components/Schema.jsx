export default function Schema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "YILDIZ VIP LUXURY",
    description:
      "İstanbul merkezli Türkiye geneli VIP transfer ve özel şoförlü ulaşım hizmeti.",
    telephone: "+905401550778",
    email: "yildizvipluxury@gmail.com",
    areaServed: "Türkiye",
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
    serviceType: [
      "VIP Transfer",
      "Havalimanı Transferi",
      "Şehirler Arası Transfer",
      "Özel Şoförlü Araç",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}