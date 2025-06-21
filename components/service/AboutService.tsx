"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
};

const AboutService = () => {
  return (
    <div>
      <div className="container">
        <div className="row align-items-center about-service-section">
          <motion.div className="col-lg-6 mb-4 mb-lg-0" {...fadeInLeft}>
            <h1 className="fw-bold mb-3">Why Choose Our Services?</h1>
            <p
              className="mb-0"
              style={{ fontSize: "1.1rem", lineHeight: "1.7" }}
            >
              We combine strategy, design, and technology to craft engaging
              digital experiences. Our multidisciplinary team ensures that every
              solution is tailored to your brand’s voice and business goals —
              delivering measurable impact in every click.
            </p>
          </motion.div>

          <motion.div className="col-lg-6" {...fadeInRight}>
            <div className="about-service-image"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutService;