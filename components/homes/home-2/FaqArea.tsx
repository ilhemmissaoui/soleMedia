"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const FaqArea = ({ style_2 }: any) => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

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

  const faqData = [
    {
      question: "What makes Sole Digital Media's digital marketing effective?",
      answer:
        "We craft tailored campaigns using data analytics, targeted ads, and creative storytelling to maximize your brand’s reach and ROI across platforms like Google, Meta, and LinkedIn.",
    },
    {
      question: "What technologies do you use for web development?",
      answer:
        "We build fast, secure, and scalable websites using technologies like Next.js, TypeScript, and headless CMS platforms. All our projects are SEO-ready and mobile optimized.",
    },
    {
      question: "What types of content do you create?",
      answer:
        "We produce written articles, social media posts, brand stories, visual content, and video scripts that align with your goals and voice to attract and engage your audience.",
    },
    {
      question: "How do you approach UI/UX design?",
      answer:
        "Our UI/UX process begins with user research and strategy, followed by wireframes, prototypes, and high-fidelity designs that prioritize intuitive experiences and brand consistency.",
    },
    {
      question: "Can you help my website rank higher on Google?",
      answer:
        "Absolutely. Our SEO services include keyword research, on-page optimization, technical audits, link building, and content planning to boost your visibility and traffic.",
    },
    {
      question: "Do you manage all social media platforms?",
      answer:
        "Yes, we manage Instagram, Facebook, TikTok, LinkedIn, and more. We handle content creation, scheduling, community engagement, and reporting — tailored to your audience.",
    },
    {
      question: "What’s included in your video production services?",
      answer:
        "We offer concept development, scripting, filming, editing, and post-production for promotional videos, interviews, product showcases, and social media reels.",
    },
    {
      question: "How does influencer marketing work with Sole Digital Media?",
      answer:
        "We connect your brand with the right influencers in your niche, design custom campaigns, manage collaborations, and track performance to ensure authentic engagement and ROI.",
    },
  ];

  return (
    <>
      <div className="faq-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5 ">
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
                  alt="Team working"
                  loading="lazy"
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
              <motion.div
                className="mission-vision-accordion"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 1.2 }}
              >
                <div className="accordion" id="faqAccordion">
                  {faqData.map((item, index) => (
                    <div key={index + 1} className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${
                            activeIndex === index + 1 ? "" : "collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faqQuestion${index + 1}`}
                          aria-expanded={
                            activeIndex === index + 1 ? "true" : "false"
                          }
                          aria-controls={`faqQuestion${index + 1}`}
                          onClick={() => setActiveIndex(index + 1)}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={`faqQuestion${index + 1}`}
                        className={`accordion-collapse collapse ${
                          activeIndex === index + 1 ? "show" : ""
                        }`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">{item.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default FaqArea;
