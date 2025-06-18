"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const WorkprocessArea = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const processCards = [
    {
      number: 1,
      title: "Who We Are?",
      text: "Founded on the principles of creativity, integrity, and performance, Sole Digital Media is driven by a team of passionate professionals who understand what it takes to stand out in today's competitive digital landscape. We specialize in developing comprehensive digital strategies that align with your business objectives, whether you're launching, scaling, or reinventing your brand.",
    },
    {
      number: 2,
      title: "What We Do?",
      text: "We offer a broad range of services designed to deliver measurable results—whether you're seeking enhanced visibility, stronger engagement, or a complete digital transformation. Explore our complete offerings on the Services Page.",
    },
    {
      number: 3,
      title: "Our Mission",
      text: "To empower brands and creators through intelligent, high-impact, innovative digital solutions that inspire connection, growth, and long-term value.",
    },
    {
      number: 4,
      title: "Our Vision",
      text: "To be a trusted global partner in digital innovation—where strategy, creativity, and technology converge to shape the future of brand experiences.",
    },
  ];

  return (
    <>
      <div className="work-process-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            {/* Left Text Section */}
            <motion.div
              className="col-md-5 col-xl-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-heading">
                <h2 className="mb-4">Discover Sole Digital Media</h2>
                <p className="mb-5">
                  Get to know who we are, what we do, and the vision that drives
                  us. From strategy to execution, our mission is to help brands
                  grow, connect, and lead in the digital world.
                </p>
                <a href="#" className="btn btn-primary">
                  <span>READ MORE</span>
                  <span>READ MORE</span>
                </a>
              </div>
            </motion.div>

            {/* Right Process Cards */}
            <motion.div
              className="col-md-7 col-xl-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="work-process">
                {processCards.map((card, index) => (
                  <motion.div
                    className="process-card"
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                    <div className="number">{card.number}</div>
                    <div className="process-text">
                      <h4>{card.title}</h4>
                      <p
                        className="mb-0"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: expandedCards.includes(index)
                            ? "unset"
                            : "3", // Default to 3 lines before truncating
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          lineHeight: "1.5",
                        }}
                      >
                        {card.text}
                      </p>
                      {/* Ensure Read More button works for both long and short texts */}
                      {card.text.length > 50 && ( // Show Read More button if the text length is more than 50 characters
                        <button
                          onClick={() => toggleCard(index)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "#ff971e",
                            cursor: "pointer",
                            padding: "8px 0",
                          }}
                        >
                          {expandedCards.includes(index)
                            ? "Read Less"
                            : "Read More..."}
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default WorkprocessArea;
