"use client";

import { motion } from "framer-motion";

const MissionAreaTikTok = () => {
  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }

  return (
    <>
      <div className="mission-vision-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 align-items-center">
            {/* Left Image with Animation */}
            <motion.div
              className="col-12 col-lg-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
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

            {/* Right Content with Animation */}
            <motion.div
              className="col-12 col-lg-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mission-vision-content">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ color: "#ff971e", marginBottom: "30px" }}
                >
                  Why Join Sole Digital Media?
                </motion.h3>

                {/* Accordion Section */}
                <motion.div
                  className="mission-vision-accordion"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="accordion" id="missionVision">
                    {/* Accordion Item 1 */}
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
                          Maximize Your Growth & Income
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#missionVision"
                      >
                        <div className="accordion-body">
                          <ul className="mb-0 ps-3">
                            <li>
                              Participate in exclusive TikTok campaigns and LIVE
                              challenges
                            </li>
                            <li>
                              Receive monthly performance-based coin bonuses
                            </li>
                            <li>
                              Get connected to brand deals and sponsorships
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Accordion Item 2 */}
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
                          Professional Support You Can Trust
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#missionVision"
                      >
                        <div className="accordion-body">
                          <ul className="mb-0 ps-3">
                            <li>
                              Access TikTok LIVE Studio to stream professionally
                              from your PC
                            </li>
                            <li>
                              Join strategy sessions and coaching from top LIVE
                              experts
                            </li>
                            <li>
                              Learn from exclusive training and growth workshops
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Accordion Item 3 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsethree"
                          aria-expanded="false"
                          aria-controls="collapsethree"
                        >
                          Platform Protection & Enhanced Features
                        </button>
                      </h2>
                      <div
                        id="collapsethree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#missionVision"
                      >
                        <div className="accordion-body">
                          <ul className="mb-0 ps-3">
                            <li>
                              Get LIVE access even if you haven't reached 1,000
                              followers
                            </li>
                            <li>Enjoy protection against unjustified bans</li>
                            <li>
                              Maintain 100% of your LIVE income — we charge no
                              commission
                            </li>
                            <li>
                              Ensure your success while staying aligned with
                              TikTok's Community Guidelines
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          <motion.div
  className="row mt-5 g-4"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  {/* Supported Regions */}
  <div className="col-12 col-md-6">
    <div className="info-box">
      <h4 className="info-title">🌍 Supported Regions</h4>
      <p className="mb-2 fw-bold">We welcome creators from:</p>
      <ul className="ps-3 mb-0">
        <li>MENA: UAE, KSA, Egypt, Morocco, Tunisia & more</li>
        <li>North America: United States & Canada</li>
      </ul>
    </div>
  </div>

  {/* Eligibility Criteria */}
  <div className="col-12 col-md-6">
    <div className="info-box">
      <h4 className="info-title">✅ Eligibility Criteria</h4>
      <ul className="ps-3 mb-0">
        <li>Go LIVE for at least 4 hours per day</li>
        <li>Follow TikTok's Community Guidelines and LIVE policies</li>
        <li>No history of major violations or bans</li>
        <li>Use only one active TikTok account</li>
        <li>Be located in MENA, USA, or Canada</li>
        <li>Not affiliated with another TikTok LIVE agency</li>
        <li>Show genuine engagement and commitment to LIVE content</li>
      </ul>
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

export default MissionAreaTikTok;
