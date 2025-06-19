"use client";
import Link from "next/link";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

const ProjectArea = () => {
  return (
    <>
      <div className="projects-wrapper-two bg-secondary">
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
                <h2 className="mb-0">Our Studio Showcase</h2>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="swiper-navigation-container portfolio-swiper-navigation justify-content-md-end">
                <div style={{ cursor: "pointer" }} className="portfolio-button-prev">
                  {/* SVG left arrow */}
                </div>

                <div style={{ cursor: "pointer" }} className="portfolio-button-next">
                  {/* SVG right arrow */}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="divider-sm"></div>

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
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              navigation={{ nextEl: ".portfolio-button-next", prevEl: ".portfolio-button-prev" }}
              modules={[Navigation, Autoplay]}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                480: { slidesPerView: 1, spaceBetween: 20 },
                576: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
              }}
              className="swiper portfolio-swiper"
            >
              {["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "tou1.jpg"].map((img, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="portfolio-card-two">
                      <img
                        src={`/assets/img/${index < 5 ? `soleProjects/${img}` : `tourGuide/${img}`}`}
                        alt=""
                        style={{ width: "100%", height: "400px", objectFit: "cover" }}
                      />
                      <div className="portfolio-overlay-content d-flex align-items-center justify-content-between">
                        <Link href="/portfolio">
                          <span className="material-symbols-outlined">arrow_outward</span>
                        </Link>
                      </div>
                    </div>
                    <div className="portfolio-content-two">
                      <h3>{["Burger", "Cavaliero", "Pulse", "Home arrow", "Extra Beauty", "Tour Guide"][index]}</h3>
                      <p className="mb-0">
                        {["Food and Beverage", "Arrangement, Fourniture", "Sport", "Real estate", "Aesthetics and Cosmetics", "Travel"][index]}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default ProjectArea;
