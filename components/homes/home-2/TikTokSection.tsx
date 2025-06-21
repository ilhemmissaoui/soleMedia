"use client";
import React from "react";
import { motion } from "framer-motion";

const TikTokSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="latest-service-wrapper bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <motion.div
              className="col-lg-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <div className="section-heading text-center">
                <h2 className="mb-0">
                  LIVE feature access without 1,000 followers is subject to
                  TikTok review and approval.
                </h2>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="divider-sm"></div>

        <div className="container">
          <div className="row g-4">
            {/* Card 1 */}
            <motion.div
              className="col-lg-6 col-md-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="process-card-two">
                <h2>What You'll Gain?</h2>
                <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                  <li>Monthly Bonus Coins & Milestone Rewards</li>
                  <li>PK Battles & Creator-Only Competitions</li>
                  <li>Invitations to Official TikTok Campaigns</li>
                </ul>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="col-lg-6 col-md-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="process-card-two">
                <h2>How to Join?</h2>
                <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                  <li>Fill out our registration form</li>
                  <li>Our team reviews your profile</li>
                  <li>Receive official invite via TikTok app</li>
                </ul>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="col-lg-6 col-md-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="process-card-two">
                <h2>Benefits</h2>
                <p className="mb-0">
                  Full support for your TikTok LIVE career including coaching,
                  analytics, and brand deals.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="col-lg-6 col-md-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="process-card-two">
                <h2>Cost to Join</h2>
                <p className="mb-0">
                  Zero commission on LIVE earnings. Management fee only applies
                  to brand partnerships.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="divider"></div>
      </div>

      <style jsx>{`
        .service-card {
          padding: 30px;
          background: #fff;
          border-radius: 10px;
          transition: all 0.3s ease;
          height: 100%;
          border: 1px solid #e6e6e6;
          cursor: pointer;
        }
        .service-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transform: translateY(-5px);
          border-color: #ff971e;
        }
      `}</style>
    </>
  );
};

export default TikTokSection;
