"use client";

import { motion } from "framer-motion";
import styles from "./TikTik.module.css";

const MissionArea = () => {
  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeOut" },
  };
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <>
      <div className="mission-vision-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 align-items-center">
            <motion.div
              className="col-12 col-lg-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="mission-vision-img-container">
                <img src="/assets/img/cc2.png" alt="" />

                <div
                  className="experience text-center"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h4>More About Us</h4>
                </div>
              </div>
            </motion.div>

            <div className="col-12 col-lg-6">
              <div className="mission-vision-content">
                <motion.h1
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h1 style={{ color: "#ff971e" }}>Sole Digital Media</h1>
                </motion.h1>
                <motion.h4
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: 0.4 }} // Increased from 0.2
                >
                  Our services will help you provide the best solution so that
                  your business can runsmoothly.
                </motion.h4>
                <motion.p
                  className="mb-4"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: 0.8 }} // Increased from 0.4
                >
                  Sole Digital Media is a full-service digital marketing and
                  creative agency dedicated to building impactful digital
                  experiences for businesses, creators, and organizations across
                  the globe. As a modern and agile agency, we combine strategic
                  thinking, innovative design, and cutting-edge technology to
                  help our clients grow, engage, and lead in an increasingly
                  digital world.
                </motion.p>

                <motion.div
                  className="mission-vision-accordion"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: 1.2 }} // Increased from 0.6
                >
                  <div className="accordion" id="missionVision">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Our Mission
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#missionVision"
                      >
                        <div className="accordion-body">
                          To empower brands and creators through intelligent,
                          high-impact digital solutions that inspire connection,
                          growth, and long-term value.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Our Vision
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#missionVision"
                      >
                        <div className="accordion-body">
                          To be a trusted global partner in digital
                          innovation—where strategy, creativity, and technology
                          converge to shape the future of brand experiences.
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default MissionArea;
