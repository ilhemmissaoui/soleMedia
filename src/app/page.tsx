import HomeTwo from "@/components/homes/home-2";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Sole Digital Media - Creative Digital Agency for Branding & Web Solutions",
  description:
    "Sole Digital Media is a creative digital agency specializing in branding, web design, and digital marketing solutions to help your business grow and stand out online.",
  keywords:
    "digital marketing agency, branding, web design, SEO, social media marketing, digital advertising, content marketing",
  alternates: {
    canonical: "https://soledigitalmedia.com",
  },
  icons: {
    icon: "/src/app/favicon.ico",
    shortcut:"/src/app/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "Sole Digital Media",
  description:
    "Professional digital marketing agency offering comprehensive marketing solutions",
  url: "https://soledigitalmedia.com",
  logo: "https://soledigitalmedia.com/src/app/favicon.ico",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sousse",
    addressRegion: "Tunisia",
    addressCountry: "Tunisia",
  },
  contactPoint: {
    "@type": "Sole Digital Media",
    telephone: "+216 58 944 414",
  },
  sameAs: [
    "https://www.facebook.com/soledigitalmedia",
    "https://www.instagram.com/soledigitalmedia",
    "https://www.linkedin.com/company/sole-digital-media",
  ],
};

const index = () => {
  return (
    <Wrapper>
      <HomeTwo />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Wrapper>
  );
};

export default index;