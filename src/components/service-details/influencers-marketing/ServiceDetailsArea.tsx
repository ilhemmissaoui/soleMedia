"use client";
import Link from "next/link";
import React from "react";

const ServiceDetailsArea = () => {
  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }

  return (
    <>
      <div className="service-details-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xxl-5">
            <div className="col-12 col-lg-8">
              <div className="service-details-content">
                <img className="rounded-lg" src="/assets/img/inf1.jpg" alt="" />
                <h2>
                  Influencer marketing drives authentic connections and builds
                  trust—one collaboration at a time.
                </h2>
                <p>
                  At Sole Digital Media, we craft impactful influencer marketing
                  strategies that elevate your brand and drive real engagement.
                  From campaign planning to creator partnerships and performance
                  tracking, we connect you with the right voices to reach your
                  audience authentically—building trust, expanding visibility,
                  and delivering measurable results that fuel your business
                  growth.
                </p>

                <ul className="list-unstyled">
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Influencer Campaign Strategy
                  </li>

                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Creator Sourcing & Management
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Content Collaboration & Production
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Analytics & Performance Reporting
                  </li>
                </ul>

                <div className="row g-4">
                  <div className="col-6">
                    <img src="/assets/img/dig2.jpg" alt="" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/dig3.jpg" alt="" />
                  </div>
                </div>
              </div>

              <div className="divider-sm"></div>

              <div className="faq-accordion service-details-faq">
                <h3 className="mb-5">
                  The creative process behind our web development solutions.{" "}
                </h3>
                <div className="accordion" id="faqAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion1"
                        aria-expanded="true"
                        aria-controls="faqQuestion1"
                      >
                        Influencer Campaign Strategy
                      </button>
                    </h2>
                    <div
                      id="faqQuestion1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        We design data-driven influencer campaigns tailored to
                        your brand goals. From concept to execution, our
                        strategies maximize visibility and impact.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion2"
                        aria-expanded="false"
                        aria-controls="faqQuestion2"
                      >
                        Creator Sourcing & Management
                      </button>
                    </h2>
                    <div
                      id="faqQuestion2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        We identify and partner with the right creators who
                        align with your brand. Our team manages collaborations
                        to ensure smooth execution and strong ROI.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion3"
                        aria-expanded="false"
                        aria-controls="faqQuestion3"
                      >
                        Content Collaboration & Production
                      </button>
                    </h2>
                    <div
                      id="faqQuestion3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        We guide creators to produce authentic, high-quality
                        branded content. Every piece is crafted to engage
                        audiences and reinforce brand messaging.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion5"
                        aria-expanded="false"
                        aria-controls="faqQuestion5"
                      >
                        Analytics & Performance Reporting
                      </button>
                    </h2>
                    <div
                      id="faqQuestion5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        We track key metrics to evaluate campaign effectiveness
                        and audience impact. Our insights help refine strategies
                        and prove real business value.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="d-flex flex-column gap-5">
                <div className="service-widget">
                  <h4 className="mb-4">Service List</h4>

                  <ul className="service-list">
                    <li>
                      <Link href="/service/digital-marketing">
                        Digital Marketing
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/web-development">
                        Web Development
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/content-creation">
                        Content creation
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/graphic-design">
                        UI/UX Design
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/seo-optimization">
                        SEO optimization
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/social-media-management">
                        Media management
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/video-production">
                        video production
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/influencers-marketing">
                        Influencers marketing
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="service-widget brochures">
                  <h4 className="mb-4">Our Brochures</h4>

                  <div className="d-flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_1597)">
                        <path
                          d="M6.70703 46.127C7.42451 48.3722 9.50576 50.0006 11.9562 50.0006H38.0443C40.4946 50.0006 42.5759 48.3722 43.2934 46.127H6.70703Z"
                          fill="#ECC80B"
                        />
                        <path
                          d="M41.9457 8.03447L35.5285 1.61729C35.2639 1.35254 34.9776 1.11914 34.6729 0.916016V8.85498C34.6729 9.03564 34.8203 9.18223 35.0011 9.18223H42.8277C42.5895 8.76699 42.2935 8.38223 41.9457 8.03447Z"
                          fill="#ECC80B"
                        />
                        <path
                          d="M43.5614 12.1116H35.0013C33.2041 12.1116 31.7429 10.6504 31.7429 8.8542V0.00195312C31.7048 0 31.6657 0 31.6276 0H11.9561C8.91445 0 6.43945 2.4751 6.43945 5.51758V20.5662H43.5615L43.5614 12.1116Z"
                          fill="#ECC80B"
                        />
                        <path
                          d="M25.0528 29.9707H23.7129V36.8811H25.0528C25.9562 36.8811 26.4078 36.3793 26.4078 35.3755V31.4763C26.4077 30.4728 25.9561 29.9707 25.0528 29.9707Z"
                          fill="#ECC80B"
                        />
                        <path
                          d="M16.6369 29.9707H15.1465V33.1473H16.6369C17.5402 33.1473 17.992 32.6455 17.992 31.6417V31.4762C17.9918 30.4728 17.5401 29.9707 16.6369 29.9707Z"
                          fill="#ECC80B"
                        />
                        <path
                          d="M43.752 23.4961H6.24854C4.20742 23.4961 2.54688 25.1566 2.54688 27.1978V39.4938C2.54688 41.535 4.20742 43.1955 6.24854 43.1955H43.7519C45.793 43.1955 47.4536 41.535 47.4536 39.4938V27.1978C47.4536 25.1566 45.7931 23.4961 43.752 23.4961ZM20.3409 31.4603C20.3409 32.6548 20.0021 33.5355 19.3246 34.1024C18.6472 34.6695 17.7514 34.953 16.6373 34.953H15.1469V38.2049C15.1469 38.4358 15.0313 38.614 14.8006 38.7394C14.5696 38.8649 14.2937 38.9275 13.9726 38.9275C13.6512 38.9275 13.3753 38.8649 13.1444 38.7394C12.9135 38.614 12.7981 38.4358 12.7981 38.2049V28.6298C12.7981 28.4393 12.8783 28.2736 13.039 28.133C13.1994 27.9926 13.4102 27.9223 13.6713 27.9223H16.7877C17.8615 27.9223 18.7224 28.2008 19.3696 28.7579C20.017 29.3149 20.3407 30.1907 20.3407 31.385V31.4603H20.3409ZM28.7564 35.3747C28.7564 36.5993 28.42 37.4975 27.7478 38.0695C27.0752 38.6416 26.1769 38.9277 25.0529 38.9277H22.3882C22.087 38.9277 21.841 38.8576 21.6505 38.717C21.4598 38.5766 21.3644 38.4109 21.3644 38.2201V28.63C21.3644 28.4395 21.4597 28.2738 21.6505 28.1332C21.841 27.9928 22.0871 27.9225 22.3882 27.9225H25.0529C26.1769 27.9225 27.0753 28.2086 27.7478 28.7807C28.42 29.3527 28.7564 30.2512 28.7564 31.4755V35.3747ZM37.0141 29.6688C36.8885 29.8697 36.7152 29.97 36.4947 29.97H32.5955V32.5144H34.8688C35.0894 32.5144 35.2626 32.6047 35.3882 32.7853C35.5136 32.9659 35.5764 33.1819 35.5764 33.4326C35.5764 33.6636 35.5161 33.8692 35.3957 34.0499C35.2753 34.2306 35.0995 34.3208 34.8688 34.3208H32.5955V38.205C32.5955 38.4359 32.48 38.6141 32.2492 38.7395C32.0183 38.865 31.7423 38.9276 31.4212 38.9276C31.0998 38.9276 30.8239 38.865 30.5931 38.7395C30.3621 38.6141 30.2468 38.4359 30.2468 38.205V28.645C30.2468 28.4143 30.347 28.2361 30.548 28.1105C30.7485 27.9852 30.9896 27.9224 31.2705 27.9224H36.4946C36.7253 27.9224 36.9012 28.0228 37.0216 28.2235C37.142 28.4244 37.2022 28.6602 37.2022 28.9312C37.2021 29.2223 37.1394 29.4681 37.0141 29.6688Z"
                          fill="#ECC80B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_1597">
                          <rect width="50" height="50" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      <p>
                        Business is marketing discipline focused on growing
                        visibility info (non-paid) technic required.
                      </p>
                      <a href="#" className="btn-link">
                        Click here to download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;
