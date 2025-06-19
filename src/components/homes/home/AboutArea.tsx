"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

const staggerList = {
  initial: {},
  whileInView: {},
  viewport: { once: true },
  transition: { staggerChildren: 0.15, delayChildren: 0.4 },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const AboutArea = () => {
  return (
    <div className="about-us-wrapper">
      <div className="divider"></div>

      <div className="container">
        <motion.div className="row g-4 g-xl-5 align-items-center" {...fadeInUp}>
          {/* Left Image Section */}
          <motion.div className="col-12 col-md-6" {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
            <div className="about-us-thumbnail">
              <img src="/assets/img/about.jpg" alt="About" />
              <div className="top-content">
                <motion.div className="clients-images d-flex gap-2" {...staggerList}>
                  {[1, 2, 3, 4].map((num, i) => (
                    <motion.img
                      key={i}
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${num}.jpg`}
                      alt={`Client ${num}`}
                      className="rounded-circle"
                      width={50}
                      height={50}
                      style={{ objectFit: "cover" }}
                      variants={staggerItem}
                    />
                  ))}
                </motion.div>
                <h6 className="mb-0 mt-3">2566+ More Then Clients Global Reviews</h6>
              </div>
            </div>
          </motion.div>

          {/* Right Text Section */}
          <motion.div className="col-12 col-md-6" {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.4 }}>
            <div className="about-us-text-content ps-md-4">
              <motion.div {...fadeInUp}>
                <div className="section-heading">
                  <h1 className="mb-0">Sole Digital Media</h1>
                </div>
                <h6 className="mb-0">
                  Our services will help you provide the best solution so that your business can run smoothly.
                </h6>
                <p>
                  Sole Digital Media is a full-service digital marketing and creative agency dedicated to building impactful digital experiences for businesses, creators, and organizations across the globe.
                </p>
              </motion.div>

              <motion.ul className="ps-0 list-unstyled mb-0" {...staggerList}>
                {["Creative Design Excellence", "Effective Digital Marketing Strategies", "Client Satisfaction and Growth"].map((item, index) => (
                  <motion.li
                    key={index}
                    className="d-flex align-items-center gap-2"
                    variants={staggerItem}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M12.1473 23.354C12.144 23.354 12.1402 23.354 12.1369 23.354C12.0013 23.3512 11.8733 23.2932 11.7814 23.1937L2.40471 12.9978C2.24392 12.8228 2.22916 12.5592 2.36971 12.3672C2.51025 12.1758 2.76619 12.1102 2.98166 12.2108L11.5638 16.2293C11.636 16.2632 11.7213 16.2468 11.7765 16.1893L24.8676 2.50708C25.0448 2.32169 25.3346 2.30145 25.5359 2.46114C25.7371 2.62083 25.7836 2.90739 25.6431 3.12231L12.6209 23.0712C12.6023 23.1002 12.5804 23.1265 12.5563 23.1511L12.4989 23.2085C12.4054 23.3015 12.2785 23.354 12.1473 23.354Z"
                        fill="#FEFEFE"
                      />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 1 }}>
                <Link href="/service" className="btn btn-primary mt-3">
                  <span>Our Services</span>
                  <span>Our Services</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="divider"></div>
    </div>
  );
};

export default AboutArea;
