"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const BlogArea = () => {
  const blogPosts = [
    {
      id: "1",
      title: "SEO Service",
      desc: "Maximize Your Reach with Professional SEO Services",
      img: "/assets/img/blogs/seo.jpg",
      link: "/blog/seo",
    },
    {
      id: "2",
      title: "Branding Design",
      desc: "Boost Your Brand with Expert Social Media Marketing Services",
      img: "/assets/img/blogs/1.jpg",
      link: "/blog/branding-design",
    },
    {
      id: "3",
      title: "Web Development",
      desc: "Transform Your Online Presence with Advanced Web Development Services",
      img: "/assets/img/blogs/dev.jpg",
      link: "/blog/web-development",
    },
    {
      id: "4",
      title: "Content Marketing Service",
      desc: "Build Strong Customer Relationships with Comprehensive Content Marketing Services",
      img: "/assets/img/blogs/4.JPG",
      link: "/blog/marketing-content",
    },
  ];

  return (
    <>
      <div className="projects-wrapper bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="display-6 fw-bold mb-3" style={{ color: "#ff971e" }}>
              Our Blog Post
            </h2>
            <p>
              Welcome to the Sole Digital Media blog, your go-to resource for
              the latest insights, strategies, and trends in digital marketing.
              Our blog is designed to provide you with in-depth knowledge and
              actionable tips to help your business thrive in the ever-evolving
              digital landscape. From expert advice on SEO and social media
              marketing to comprehensive guides on influencer marketing and
              content creation, we cover a wide range of topics to support your
              digital growth journey.
            </p>
          </motion.div>

          <div className="divider"></div>

          <motion.div
            className="row g-4 align-items-end justify-content-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="col-12 col-md-6 col-lg-5">
              <div className="section-heading">
                <h2 className="mb-0">Let's See Our Blogs</h2>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="text-md-end">
                <a href="#" className="btn btn-primary">
                  <span>VIEW MORE</span>
                  <span>VIEW MORE</span>
                </a>
              </div>
            </div>
          </motion.div>

          <div className="divider-sm"></div>

          <motion.div
            className="row g-4 g-xl-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="col-md-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="portfolio-card">
                  <img src={post.img} alt={post.title} />

                  <div className="portfolio-overlay-content d-flex align-items-center justify-content-between">
                    <div className="me-4">
                      <h3 className="mb-0">{post.title}</h3>
                      <p className="mb-0">{post.desc}</p>
                    </div>

                    <Link href={post.link} className="btn">
                      <span>{arrowIcon}</span>
                      <span>{arrowIcon}</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};

const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M21.0459 12.796L14.2959 19.546C14.0846 19.7573 13.7979 19.8761 13.4991 19.8761C13.2002 19.8761 12.9135 19.7573 12.7022 19.546C12.4908 19.3346 12.3721 19.048 12.3721 18.7491C12.3721 18.4502 12.4908 18.1636 12.7022 17.9522L17.5312 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5846 2.625 12.2984 2.625 12C2.625 11.7017 2.74353 11.4155 2.9545 11.2045C3.16548 10.9936 3.45163 10.875 3.75 10.875H17.5312L12.7041 6.04504C12.4927 5.8337 12.374 5.54705 12.374 5.24817C12.374 4.94928 12.4927 4.66264 12.7041 4.45129C12.9154 4.23995 13.2021 4.12122 13.5009 4.12122C13.7998 4.12122 14.0865 4.23995 14.2978 4.45129L21.0478 11.2013C21.1527 11.3059 21.2359 11.4303 21.2926 11.5672C21.3493 11.7041 21.3784 11.8508 21.3782 11.999C21.3781 12.1472 21.3486 12.2939 21.2916 12.4307C21.2346 12.5674 21.1511 12.6916 21.0459 12.796Z"
      fill="#0E0E0E"
    />
  </svg>
);

export default BlogArea;
