"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroArea = () => {
  return (
    <>
    
      <section className="hero-wrapper" style={{ position: "relative" }}>
        <div className="divider"></div>

        {/* Animated Background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            opacity: 0.1,
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,20 Q50,0 100,20"
              stroke="#02A3AB"
              strokeWidth="0.5"
              fill="none"
            >
              <animate
                attributeName="d"
                dur="7s"
                repeatCount="indefinite"
                values="M0,20 Q50,0 100,20;
                        M0,20 Q50,40 100,20;
                        M0,20 Q50,0 100,20"
              />
            </path>
            <path
              d="M0,50 Q50,30 100,50"
              stroke="#02A3AB"
              strokeWidth="0.5"
              fill="none"
            >
              <animate
                attributeName="d"
                dur="5s"
                repeatCount="indefinite"
                values="M0,50 Q50,30 100,50;
                        M0,50 Q50,70 100,50;
                        M0,50 Q50,30 100,50"
              />
            </path>
            <path
              d="M0,80 Q50,60 100,80"
              stroke="#02A3AB"
              strokeWidth="0.5"
              fill="none"
            >
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="M0,80 Q50,60 100,80;
                        M0,80 Q50,100 100,80;
                        M0,80 Q50,60 100,80"
              />
            </path>
          </svg>
        </div>

        {/* Original Content */}
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row g-4">
            <div className="col-12 col-lg-8 col-xl-9">
              <div className="hero-content home2">
                <h2
                  className="mb-0 wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="700ms"
                >
                  We're Digital Marketing Agency
                </h2>
              </div>
            </div>

            <motion.div
              className="col-12 col-md-8 col-lg-4 col-xl-3"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="hero-content home2">
                <motion.div
                  className="d-flex align-items-center gap-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <motion.p
                    style={{
                      color: "#ff971e",
                      fontSize: "28px",
                      fontWeight: "700",
                    }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <strong>Sole Digital Media</strong>
                  </motion.p>
                </motion.div>

                <motion.p
                  className="my-5"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  At Sole Digital Media, we leverage individual strengths to
                  achieve collective success. Our expert team delivers tailored
                  digital marketing solutions that boost your brand's
                  visibility, engage your audience, and drive measurable ROI.
                </motion.p>

                <motion.a
                  href="#"
                  className="btn btn-primary"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <span>CONTACT US</span>
                  <span>CONTACT US</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="divider"></div>
      </section>
    </>
  );
};

export default HeroArea;
