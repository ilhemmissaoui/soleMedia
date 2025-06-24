"use client";
import React from "react";
import styles from "./TikTik.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const TikTok = () => {
  return (
    <div>
      <motion.div
        className={styles.backgroundDecoration}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      />

      <div className="divider"></div>

      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="row g-4 g-xl-5 align-items-center">
          <motion.div
            className="col-12 col-md-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className={`about-us-thumbnail position-relative ${styles.animateFloat}`}
            >
              <motion.img
                src="/assets/img/Kickstarting-TikTok-Shop-Feature-Photos.png"
                alt=""
                className={styles.mainImage}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              />

              <motion.div
                className={`top-content ${styles.glassmorphism}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className={styles.clientsImages}>
                  {[1, 2, 3, 4].map((id, idx) => (
                    <motion.img
                      key={id}
                      src={`https://randomuser.me/api/portraits/${
                        idx % 2 === 0 ? "women" : "men"
                      }/${id}.jpg`}
                      alt={`Client ${id}`}
                      className={styles.clientImage}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                    />
                  ))}
                </div>
                <motion.h6
                  className="mb-0 client-count"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  2566+ views
                </motion.h6>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="col-12 col-md-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-us-text-content ps-md-4">
              <motion.div
                className="section-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <span className="subtitle">Welcome to</span>
                <motion.h1 className="mb-3">
                  TIKTOK CREATOR NETWORK AGENCY
                </motion.h1>
              </motion.div>
              <motion.h6
                className="mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Empowering TikTok LIVE Creators
              </motion.h6>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                At Sole Digital Media, we proudly operate as an authorized
                  TikTok LIVE Creator Network, dedicated to supporting and
                  scaling livestream creators across the MENA region, USA, and
                  Canada—all while strictly adhering to TikTok&apos;s Community
                  Guidelines, LIVE policies, and ethical standards.
                  <br /> Our mission is to empower creators by providing
                  region-specific onboarding, localized content strategies, and
                  tailored growth plans that respect cultural nuances and
                  platform regulations in each market. Whether you are based in
                  North America or the Middle East and North Africa, we deliver
                  personalized support designed to maximize your TikTok LIVE
                  visibility, engagement, and monetization.
              </motion.p>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  href="/tiktok-agency"
                  className="btn btn-primary d-inline-block"
                >
                  <motion.span>READ MORE</motion.span>
                  <motion.span>READ MORE</motion.span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="divider"></div>
    </div>
  );
};

export default TikTok;
