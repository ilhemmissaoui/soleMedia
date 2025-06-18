"use client";
import Link from "next/link";
import React, { useState } from "react";

export const services = [
  {
    id: "1",
    icon: "campaign",
    title: "Digital Marketing",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    bgImage: "assets/img/digital-marketing.jpg",
    link: "/service/digital-marketing",
  },
  {
    id: "2",
    icon: "code",
    title: "Web Development",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    bgImage: "assets/img/webDev.jpg",
    link: "/service/web-development",
  },
  {
    id: "3",
    icon: "edit_note",
    title: "Content creation",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    bgImage: "assets/img/mobileApp.jpg",
    link: "/service/content-creation",
  },
  {
    id: "4",
    icon: "palette",
    title: "UI/UX Design",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    bgImage: "assets/img/ux.jpg",
    link: "/service/graphic-design",
  },
  {
    id: "5",
    icon: "search",
    title: "SEO optimization",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    bgImage: "assets/img/digital-marketing.jpg",
    link: "/service/seo-optimization",
  },
  {
    id: "6",
    icon: "share",
    title: "Social media management",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    bgImage: "/assets/img/med1.jpg",
    link: "/service/social-media-management",
  },
  {
    id: "7",
    icon: "videocam",
    title: "video production",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    bgImage: "/assets/img/video1.jpg",
    link: "/service/video-production",
  },
  {
    id: "8",
    icon: "group",
    title: "Influencers marketing",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    bgImage: "/assets/img/inf1.jpg",
    link: "/service/influencers-marketing",
  },
];

const ServiceArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="service-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3" style={{ color: "#ff971e" }}>
              Our Services
            </h2>
            <p>
              We deliver end-to-end digital solutions designed to elevate your
              business, drive growth, and ensure lasting success in today&apos;s
              dynamic digital landscape.
            </p>
          </div>

          <div className="row g-4 g-lg-5">
            {services.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-xl-4">
              <Link href={item.link}>
  <div
    onMouseEnter={() => setActiveIndex(i)}
    onMouseLeave={() => setActiveIndex(null)}
    className={`service-slide-card ${activeIndex === i ? "active" : ""}`}
    style={{
      backgroundImage:
        activeIndex === i
          ? "none"
          : `url(${item.bgImage})`, // Correct the background image URL string
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: activeIndex === i ? "#ff971e" : "transparent", // Background color when not active
    }}
  >
    <span
      className="material-symbols-outlined"
      style={{
        color: "white",
      }}
    >
      {item.icon}
    </span>

    <h2
      style={{
        bottom: `${activeIndex === i ? "140px" : "50px"}`, // Adjust position based on active state
        color: "white",
        transition: "all 0.3s ease", // Smooth transition
        opacity: 1, // Ensure the title is always visible
      }}
    >
      {item.title}
    </h2>

    <p
      className="mb-0"
      style={{
        bottom: `${activeIndex === i ? "45px" : "50px"}`, // Adjust position based on active state
        color: "white",
        transition: "all 0.3s ease", // Smooth transition
        opacity: 1, // Ensure the description is always visible
      }}
    >
      {item.description}
    </p>
  </div>
</Link>

              </div>
            ))}
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default ServiceArea;
