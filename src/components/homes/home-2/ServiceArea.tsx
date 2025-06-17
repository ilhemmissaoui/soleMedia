"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Service data
const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Transform your digital presence with our bespoke website and e-commerce solutions. Ready to elevate your online presence? Let's build something amazing together!",
    iconPath:
      "M3.64583 31.2493H19.2708C21.2812 31.2493 22.9167 29.6139 22.9167 27.6035V20.3118C22.9167 18.3014 21.2812 16.666 19.2708 16.666H3.64583C1.63542 16.666 0 18.3014 0 20.3118V27.6035C0 29.6139 1.63542 31.2493 3.64583 31.2493Z M3.64583 49.9993H19.2708C21.2812 49.9993 22.9167 48.3639 22.9167 46.3535V39.0618C22.9167 37.0514 21.2812 35.416 19.2708 35.416H3.64583C1.63542 35.416 0 37.0514 0 39.0618V46.3535C0 48.3639 1.63542 49.9993 3.64583 49.9993Z M46.3542 0H3.64583C1.63542 0 0 1.63542 0 3.64583V8.85417C0 10.8646 1.63542 12.5 3.64583 12.5H46.3542C48.3646 12.5 50 10.8646 50 8.85417V3.64583C50 1.63542 48.3646 0 46.3542 0Z M46.3538 16.666H30.7288C28.7184 16.666 27.083 18.3014 27.083 20.3118V46.3535C27.083 48.3639 28.7184 49.9993 30.7288 49.9993H46.3538C48.3643 49.9993 49.9997 48.3639 49.9997 46.3535V20.3118C49.9997 18.3014 48.3643 16.666 46.3538 16.666Z",
    clipId: "clip0_1_677",
  },
  {
    id: 2,
    title: "Website Development",
    description:
      "We specialize in creating responsive, user-friendly websites that make a lasting impression. Our expert team combines cutting-edge technology with innovative design to deliver websites that not only look great but also drive results. From simple landing pages to complex e-commerce solutions, we ensure your digital presence stands out.",
    iconPath:
      "M49.3896 23.5271L41.6375 15.775C41.6396 15.7229 41.6667 15.6771 41.6667 15.625V9.375C41.6667 8.225 40.7354 7.29167 39.5833 7.29167H18.75V2.08333C18.75 0.933333 17.8188 0 16.6667 0H2.08333C0.93125 0 0 0.933333 0 2.08333V16.6667C0 17.8167 0.93125 18.75 2.08333 18.75H16.6667C17.8188 18.75 18.75 17.8167 18.75 16.6667V11.4583H37.5V15.625C37.5 15.6771 37.5271 15.7229 37.5292 15.775L29.7771 23.5271C28.9625 24.3417 28.9625 25.6583 29.7771 26.4729L37.5292 34.225C37.5271 34.2771 37.5 34.3229 37.5 34.375V38.5417H18.4979C17.5458 34.375 13.8271 31.25 9.375 31.25C4.20625 31.25 0 35.4562 0 40.625C0 45.7937 4.20625 50 9.375 50C13.8271 50 17.5458 46.875 18.4979 42.7083H39.5833C40.7354 42.7083 41.6667 41.775 41.6667 40.625V34.375C41.6667 34.3229 41.6396 34.2771 41.6375 34.225L49.3896 26.4729C50.2042 25.6583 50.2042 24.3417 49.3896 23.5271ZM14.5833 14.5833H4.16667V4.16667H14.5833V14.5833ZM9.375 45.8333C6.50208 45.8333 4.16667 43.4958 4.16667 40.625C4.16667 37.7542 6.50208 35.4167 9.375 35.4167C12.2479 35.4167 14.5833 37.7542 14.5833 40.625C14.5833 43.4958 12.2479 45.8333 9.375 45.8333Z",
    clipId: "clip0_1_6888",
  },
  {
    id: 3,
    title: "Content creation",
    description:
      "Whether you're aiming to inform, entertain, or inspire, our content creation services ensure your message shines brightly in the digital landscape.",
    iconPath:
      "M43.75 2.08398H6.25C2.80417 2.08398 0 4.88815 0 8.33398V41.6673C0 45.1131 2.80417 47.9173 6.25 47.9173H43.75C47.1958 47.9173 50 45.1131 50 41.6673V8.33398C50 4.88815 47.1958 2.08398 43.75 2.08398ZM45.8333 41.6673C45.8333 42.8173 44.8979 43.7506 43.75 43.7506H6.25C5.10208 43.7506 4.16667 42.8173 4.16667 41.6673V12.5007H45.8333V41.6673Z",
    clipId: "clip0_1_6770",
  },
  {
    id: 4,
    title: "Graphic design",
    description:
      "Our skilled graphic designers craft captivating logos, compelling marketing materials, and engaging social media graphics tailored to your unique brand personality.",
    iconPath:
      "M49.3896 23.5271L41.6375 15.775C41.6396 15.7229 41.6667 15.6771 41.6667 15.625V9.375C41.6667 8.225 40.7354 7.29167 39.5833 7.29167H18.75V2.08333C18.75 0.933333 17.8188 0 16.6667 0H2.08333C0.93125 0 0 0.933333 0 2.08333V16.6667C0 17.8167 0.93125 18.75 2.08333 18.75H16.6667C17.8188 18.75 18.75 17.8167 18.75 16.6667V11.4583H37.5V15.625C37.5 15.6771 37.5271 15.7229 37.5292 15.775L29.7771 23.5271C28.9625 24.3417 28.9625 25.6583 29.7771 26.4729L37.5292 34.225C37.5271 34.2771 37.5 34.3229 37.5 34.375V38.5417H18.4979C17.5458 34.375 13.8271 31.25 9.375 31.25C4.20625 31.25 0 35.4562 0 40.625C0 45.7937 4.20625 50 9.375 50C13.8271 50 17.5458 46.875 18.4979 42.7083H39.5833C40.7354 42.7083 41.6667 41.775 41.6667 40.625V34.375C41.6667 34.3229 41.6396 34.2771 41.6375 34.225L49.3896 26.4729C50.2042 25.6583 50.2042 24.3417 49.3896 23.5271ZM14.5833 14.5833H4.16667V4.16667H14.5833V14.5833ZM9.375 45.8333C6.50208 45.8333 4.16667 43.4958 4.16667 40.625C4.16667 37.7542 6.50208 35.4167 9.375 35.4167C12.2479 35.4167 14.5833 37.7542 14.5833 40.625C14.5833 43.4958 12.2479 45.8333 9.375 45.8333Z",
    clipId: "clip0_1_688",
  },
  {
    id: 5,
    title: "SEO Otimization",
    description:
      "Your online presence with our tailored SEO solutions. From keyword research to on-page optimization and link-building strategies, we help you climb search engine rankings and attract organic traffic.",
    iconPath:
      "M21 3C11.6112 3 4 10.6112 4 20C4 29.3888 11.6112 37 21 37C25.1754 37 29.0202 35.423 32.0625 32.875L42.2929 43.1054C42.6834 43.4959 43.3166 43.4959 43.7071 43.1054L45.1054 41.7071C45.4959 41.3166 45.4959 40.6834 45.1054 40.2929L34.875 30.0625C37.423 27.0202 39 23.1754 39 19C39 9.61116 31.3888 2 21 2ZM12 20H16V28H12V20ZM20 14H24V28H20V14ZM28 18H32V28H28V18Z",
    clipId: "clip0_1_1101",
  },
  {
    id: 6,
    title: "Social media management",
    description:
      "Let us boost your brand's visibility, engage your audience, and drive results across platforms like Facebook, Instagram, Twitter, LinkedIn, and TikTok.",
    iconPath:
      "M10 0H40C45.5228 0 50 4.47715 50 10V40C50 45.5228 45.5228 50 40 50H10C4.47715 50 0 45.5228 0 40V10C0 4.47715 4.47715 0 10 0ZM25 12.5C20.8579 12.5 17.5 15.8579 17.5 20C17.5 24.1421 20.8579 27.5 25 27.5C29.1421 27.5 32.5 24.1421 32.5 20C32.5 15.8579 29.1421 12.5 25 12.5ZM25 32.5C18.0964 32.5 12.5 38.0964 12.5 45H37.5C37.5 38.0964 31.9036 32.5 25 32.5Z",
    clipId: "clip0_1_1002",
  },
  {
    id: 7,
    title: "Video production",
    description:
      "Welcome to our world of professional video production services! We specialize in creating captivating and effective videos that tell your story, promote your brand, and engage your audience.",
    iconPath:
      "M10 5C7.23858 5 5 7.23858 5 10V40C5 42.7614 7.23858 45 10 45H40C42.7614 45 45 42.7614 45 40V10C45 7.23858 42.7614 5 40 5H10ZM20 18.75L33.3333 25L20 31.25V18.75Z",
    clipId: "clip0_1_1003",
  },
  {
    id: 8,
    title: "Indluencers marketing",
    description:
      "We connect brands with influential voices to create authentic campaigns that build trust, boost visibility, and drive results.",
    iconPath:
      "M25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0ZM25 7.5C21.4101 7.5 18.5 10.4101 18.5 14C18.5 17.5899 21.4101 20.5 25 20.5C28.5899 20.5 31.5 17.5899 31.5 14C31.5 10.4101 28.5899 7.5 25 7.5ZM25 45.8333C31.25 45.8333 37.5 39.5833 37.5 33.3333C37.5 27.0833 31.25 25 25 25C18.75 25 12.5 27.0833 12.5 33.3333C12.5 39.5833 18.75 45.8333 25 45.8333Z",
    clipId: "clip0_1_1004",
  },
  {
    id: 9,
    title: "Digital marketing",
    description:
      "Gain a competitive edge and maximize your online presence with our expert team dedicated to boosting your brand's visibility, engagement, and ROI.",
    iconPath:
      "M3 18C3 15.7909 4.79086 14 7 14H11L22 8V34L11 28H7C4.79086 28 3 26.2091 3 24V18ZM24 12.5L40 5V37L24 29.5V12.5ZM44 14C45.1046 14 46 14.8954 46 16V26C46 27.1046 45.1046 28 44 28C42.8954 28 42 27.1046 42 26V16C42 14.8954 42.8954 14 44 14Z",
    clipId: "clip0_1_1123",
  },
];

const MAX_LINES = 3;
const LINE_HEIGHT = 20;
const MAX_HEIGHT = MAX_LINES * LINE_HEIGHT;

const ServiceItem = ({
  title,
  description,
  iconPath,
  clipId,
}: {
  title: string;
  description: string;
  iconPath: string;
  clipId: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const descriptionRef = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    if (descriptionRef.current) {
      setShowMore(descriptionRef.current.scrollHeight > MAX_HEIGHT);
    }
  }, [description]);

  return (
    <div className="service-item">
      <Link href="/service">
        <div className="icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <g clipPath={`url(#${clipId})`}>
              <path d={iconPath} fill="#ff971e" />
            </g>
            <defs>
              <clipPath id={clipId}>
                <rect width="50" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h6>{title}</h6>
      </Link>
      <div className="description-wrapper">
        <p
          ref={descriptionRef}
          className={`mb-0 description ${isExpanded ? "expanded" : ""}`}
          style={{
            maxHeight: isExpanded ? "none" : `${MAX_HEIGHT}px`,
            overflow: "hidden",
            transition: "max-height 0.3s ease-out",
          }}
        >
          {description}
        </p>
        {showMore && (
          <span
            className="show-more-text"
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }}
            style={{
              cursor: "pointer",
              color: "#ff971e",
              transition: "color 0.3s ease",
              display: "inline-block",
              marginTop: "8px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d67b16")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ff971e")}
          >
            {isExpanded ? "Show less" : "Show more..."}
          </span>
        )}
      </div>
    </div>
  );
};

const ServiceArea = () => {
  return (
    <>
      <div className="latest-service-wrapper bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-heading text-center">
                <h2 className="mb-0">Our services</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-sm"></div>

        <div className="container">
          <Swiper
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination-2",
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1200: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="swiper service-two-swiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id} className="swiper-slide">
                <ServiceItem {...service} />
              </SwiperSlide>
            ))}

            <div className="swiper-pagination-2"></div>
          </Swiper>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default ServiceArea;
