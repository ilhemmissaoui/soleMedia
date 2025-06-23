import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Cta2Area = () => {
  return (
    <>
      <div className="cta-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-6">
              <h2
                className="wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="700ms"
              >
                Let's Work Together
              </h2>
            </div>
            <div className="col-12 col-lg-6">
              <p
                className="wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="900ms"
              >
                Studio agencies excel in graphic design, design, branding, and
                visual elements, offering comprehensive solutions for
                businesses' design needs across graphic platforms.
              </p>
              <motion.div
                className="text-center mt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <Link href="/contact" className="btn btn-primary">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                  >
                    CONTACT US
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    CONTACT US
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default Cta2Area;
