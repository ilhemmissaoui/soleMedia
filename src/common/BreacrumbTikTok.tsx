"use client";
import React from "react";
import { motion } from "framer-motion";

const Breacrumb = ({
  title = "TIKTOK Live",
  subtitle = "Creator Network",
}: any) => {
  return (
    <section className="hero-wrapper2">
      <motion.div
        className="animated-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-content">
              <motion.h2
                className="mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {title}
              </motion.h2>

              <motion.h3
                className="mb-0 d-md-flex align-items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {subtitle}

                <motion.span
                  className="hero-subtitle mt-3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Join our TikTok Live Creator Network and unlock new
                  opportunities to grow your audience, monetize your content,
                  and collaborate with top brands. We empower creators with the
                  tools, insights, and support needed to thrive on TikTok Live,
                  turning creativity into real-time engagement and revenue.
                </motion.span>
              </motion.h3>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>
    </section>
  );
};

export default Breacrumb;
