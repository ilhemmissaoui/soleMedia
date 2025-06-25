import Head from "next/head";

import Wrapper from "../layouts/Wrapper";
import HomeTwo from "../components/homes/home-2";

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
    "@type": "ContactPoint",
    telephone: "+216 58 944 414",
    contactType: "Customer Service",
  },
  sameAs: [
    "https://www.facebook.com/soledigitalmedia",
    "https://www.instagram.com/soledigitalmedia",
    "https://www.linkedin.com/company/sole-digital-media",
  ],
};

const IndexPage = () => {
  return (
    <>
      <Head>
        {/* Title & Description */}
        <title>
          Sole Digital Media - Creative Digital Agency for Branding & Web
          Solutions
        </title>
        <meta
          name="description"
          content="Sole Digital Media is a creative digital agency specializing in branding, web design, and digital marketing solutions to help your business grow and stand out online."
        />
        <meta
          name="keywords"
          content="digital marketing agency, branding, web design, SEO, social media marketing, digital advertising, content marketing"
        />
        <link rel="canonical" href="https://soledigitalmedia.com" />

        {/* Open Graph (Facebook) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sole Digital Media - Creative Digital Agency" />
        <meta
          property="og:description"
          content="Empowering your digital success with cutting-edge marketing and web solutions."
        />
        <meta property="og:url" content="https://soledigitalmedia.com" />
        <meta
          property="og:image"
          content="https://soledigitalmedia.com/assets/img/og-image.jpg"
        />
        <meta property="og:site_name" content="Sole Digital Media" />

        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID'); 
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            loading="lazy"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
          />
        </noscript>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Wrapper>
        <HomeTwo />
      </Wrapper>
    </>
  );
};

export default IndexPage;
