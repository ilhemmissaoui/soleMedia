"use client";
import React from "react";
import styles from "./ProcessArea.module.css";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ProcessArea = () => {
  return (
    <>
      <div className="process-wrapper bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-3 justify-content-center">
            <div className="col-12 col-lg-6">
              <motion.div
                className="section-heading text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="mb-0">Our Work Process</h2>
              </motion.div>
            </div>
          </div>

          <div className="divider-sm"></div>

          <motion.div
            className="stepper-wrap"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <h6>Step 1</h6>
              <span></span>
            </div>
            <div>
              <h6>Step 2</h6>
              <span></span>
            </div>
            <div>
              <h6>Step 3</h6>
              <span></span>
            </div>
          </motion.div>

          <div className="divider-sm"></div>
          <div className="row g-4">
            {/* Card 1: Design Strategy */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="process-card-two">
                {/* Keep your existing SVG icon here */}
                <h4>Design Strategy</h4>
                <p className="mb-0">
                  We craft data-driven design strategies that align creativity
                  with your business goals. Our team ensures every design
                  decision enhances brand identity, user engagement, and
                  conversion outcomes.
                </p>
              </div>
            </div>

            {/* Card 2: Visual Prototyping */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="process-card-two">
                {/* Keep your existing SVG icon here */}
                <h4>Visual Prototyping</h4>
                <p className="mb-0">
                  From sketches to high-fidelity prototypes, we visualize your
                  ideas to bring them to life. Our process ensures stakeholders
                  can interact, validate, and refine experiences before
                  development begins.
                </p>
              </div>
            </div>

            {/* Card 3: Web Development */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="process-card-two">
                {/* Keep your existing SVG icon here */}
                <h4>Web Development</h4>
                <p className="mb-0">
                  We build fast, secure, and scalable websites and applications.
                  Our development team uses the latest technologies to deliver
                  digital products optimized for performance and growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default ProcessArea;
