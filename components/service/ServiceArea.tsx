"use client";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    id: "1",
    icon: "campaign",
    title: "Digital Marketing",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    link: "/service/digital-marketing",
  },
  {
    id: "2",
    icon: "code",
    title: "Web Development",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    link: "/service/web-development",
  },
  {
    id: "3",
    icon: "edit_note",
    title: "Content creation",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    link: "/service/content-creation",
  },
  {
    id: "4",
    icon: "palette",
    title: "UI/UX Design",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    link: "/service/graphic-design",
  },
  {
    id: "5",
    icon: "search",
    title: "SEO optimization",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    link: "/service/seo-optimization",
  },
  {
    id: "6",
    icon: "share",
    title: "Social media management",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    link: "/service/social-media-management",
  },
  {
    id: "7",
    icon: "videocam",
    title: "Video production",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    link: "/service/video-production",
  },
  {
    id: "8",
    icon: "group",
    title: "Influencers marketing",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    link: "/service/influencers-marketing",
  },
];

const ServiceArea = () => {
  return (
    <div className="service-wrapper bg-secondary">
      <div className="divider"></div>

      <div className="container">
        <motion.div
          className="row g-5 align-items-end justify-content-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="col-12 col-md-6 col-lg-5">
            <div className="section-heading">
              <h2 className="mb-0">Our Services</h2>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".portfolio-button-next",
              prevEl: ".portfolio-button-prev",
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1200: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="swiper portfolio-swiper"
          >
            {services.map((item, index) => (
              <SwiperSlide
                className="swiper-slide"
                style={{ height: "580px", paddingTop: "30px" }}
                key={item.id}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={item.link}>
                    <div className="service-slide-card">
                      <span className="material-symbols-outlined mb-3">
                        {item.icon}
                      </span>
                      <h3>{item.title}</h3>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
      <div className="divider-sm"></div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ServiceArea), { ssr: false });
