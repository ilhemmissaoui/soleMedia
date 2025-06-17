"use client";
import React from "react";
import { motion } from "framer-motion";

const FaqArea = ({ style_2 }: any) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeOut" }, // Increased from 0.6 to 1.2
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.3, // Increased from 0.1 to 0.3
        delayChildren: 0.2, // Added delay before children start animating
      },
    },
  };

  return (
    <>
      <div className="faq-wrapper ">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5 align-items-center">
            <motion.div
              className="col-12 col-lg-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <motion.div className="section-heading" variants={fadeInUp}>
                <h2 className="mb-0">Frequently Asked Questions</h2>
              </motion.div>

              <div className="divider-sm"></div>

              <motion.div className="faq-image" variants={fadeInUp}>
                <img
                  src="/assets/img/three-confident-professional-businessmen-in-formal-2024-11-18-09-35-51-utc.jpg"
                  alt=""
                />

                <div className="faq-info d-flex align-items-center">
                  <h2 className="mb-0">FAQ</h2>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="col-12 col-lg-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className="faq-accordion ps-lg-4">
                <div className="accordion" id="faqAccordion">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <motion.div
                      key={num}
                      className="accordion-item"
                      variants={fadeInUp}
                      custom={num}
                    >
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faqQuestion${num}`}
                          aria-expanded={num === 1}
                          aria-controls={`faqQuestion${num}`}
                        >
                          {num === 1
                            ? "What is vision for the future?"
                            : num === 2
                            ? "Do you offer free resources?"
                            : num === 3
                            ? "Can help to find investors?"
                            : num === 4
                            ? "Can help to find investors?"
                            : "What services do you offer?"}
                        </button>
                      </h2>
                      <div
                        id={`faqQuestion${num}`}
                        className={`accordion-collapse collapse ${
                          num === 1 ? "show" : ""
                        }`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body pt-0">
                          A business consultant is a professional who provides
                          expert advice and guidance on various aspects such.
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default FaqArea;
