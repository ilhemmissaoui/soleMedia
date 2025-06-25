"use client";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialArea = () => {
  return (
    <>
      <div className="testimonial-wrapper bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <div className="section-heading">
                <h2 className="mb-0">What Our Client Thinks</h2>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="testimonial-slide">
                <Swiper
                  loop={true}
                  spaceBetween={30}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  modules={[Autoplay, Navigation]}
                  className="swiper testimonial-swiper"
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="rating-info">
                      <div className="rating-average">
                        <span>4.9</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                        >
                          <path
                            d="M4.84834 16.7794C4.09178 17.2358 3.15841 16.5586 3.35754 15.6978L4.31432 11.5616C4.39779 11.2007 4.27497 10.8233 3.99511 10.5806L0.784975 7.79752C0.117446 7.21879 0.473397 6.1221 1.35356 6.0457L5.59988 5.67709C5.96906 5.64505 6.29024 5.41147 6.43451 5.07014L8.07889 1.17942C8.42303 0.365148 9.57697 0.365148 9.92111 1.17941L11.5655 5.07014C11.7098 5.41147 12.0309 5.64505 12.4001 5.67709L16.6464 6.0457C17.5266 6.1221 17.8826 7.2188 17.215 7.79753L14.0049 10.5806C13.725 10.8233 13.6022 11.2007 13.6857 11.5616L14.6425 15.6978C14.8416 16.5586 13.9082 17.2358 13.1517 16.7794L9.51653 14.5866C9.19884 14.3949 8.80116 14.3949 8.48347 14.5866L4.84834 16.7794Z"
                            fill="#0E0E0E"
                          />
                        </svg>
                      </div>

                      <div className="company-logo">
                        <span>54 Reviews</span>
                      </div>
                    </div>

                    <p>
                      “He quickly delivered excellent design a per required
                      specifications. New landing page will have refreshing
                      simple look, while keeping page load light on images and
                      at the same keeping professional look. Finally, it also
                      seems very reasonable to implement responsive design, so
                      I'm very happy with that.”
                    </p>
                    <div className="border-line"></div>
                    <div className="testimonial-info d-flex align-items-center">
                      <img
                        src="https://randomuser.me/api/portraits/women/45.jpg"
                        loading="lazy"
                        alt="Sarah Miller"
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h4>Sarah Miller</h4>
                        <p className="mb-0">UX Designer</p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="rating-info">
                      <div className="rating-average">
                        <span>4.9</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                        >
                          <path
                            d="M4.84834 16.7794C4.09178 17.2358 3.15841 16.5586 3.35754 15.6978L4.31432 11.5616C4.39779 11.2007 4.27497 10.8233 3.99511 10.5806L0.784975 7.79752C0.117446 7.21879 0.473397 6.1221 1.35356 6.0457L5.59988 5.67709C5.96906 5.64505 6.29024 5.41147 6.43451 5.07014L8.07889 1.17942C8.42303 0.365148 9.57697 0.365148 9.92111 1.17941L11.5655 5.07014C11.7098 5.41147 12.0309 5.64505 12.4001 5.67709L16.6464 6.0457C17.5266 6.1221 17.8826 7.2188 17.215 7.79753L14.0049 10.5806C13.725 10.8233 13.6022 11.2007 13.6857 11.5616L14.6425 15.6978C14.8416 16.5586 13.9082 17.2358 13.1517 16.7794L9.51653 14.5866C9.19884 14.3949 8.80116 14.3949 8.48347 14.5866L4.84834 16.7794Z"
                            fill="#0E0E0E"
                          />
                        </svg>
                      </div>

                      <div className="company-logo">
                        <span>54 Reviews</span>
                      </div>
                    </div>
                    <p>
                      “He quickly delivered excellent design a per required
                      specifications. New landing page will have refreshing
                      simple look, while keeping page load light on images and
                      at the same keeping professional look. Finally, it also
                      seems very reasonable to implement responsive design, so
                      I'm very happy with that.”
                    </p>
                    <div className="border-line"></div>
                    <div className="testimonial-info d-flex align-items-center">
                      <img
                        src="https://randomuser.me/api/portraits/men/42.jpg"
                        alt="James Wilson"
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                        loading="lazy"
                      />
                      <div>
                        <h4>James Wilson</h4>
                        <p className="mb-0">Product Manager</p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="rating-info">
                      <div className="rating-average">
                        <span>4.9</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                        >
                          <path
                            d="M4.84834 16.7794C4.09178 17.2358 3.15841 16.5586 3.35754 15.6978L4.31432 11.5616C4.39779 11.2007 4.27497 10.8233 3.99511 10.5806L0.784975 7.79752C0.117446 7.21879 0.473397 6.1221 1.35356 6.0457L5.59988 5.67709C5.96906 5.64505 6.29024 5.41147 6.43451 5.07014L8.07889 1.17942C8.42303 0.365148 9.57697 0.365148 9.92111 1.17941L11.5655 5.07014C11.7098 5.41147 12.0309 5.64505 12.4001 5.67709L16.6464 6.0457C17.5266 6.1221 17.8826 7.2188 17.215 7.79753L14.0049 10.5806C13.725 10.8233 13.6022 11.2007 13.6857 11.5616L14.6425 15.6978C14.8416 16.5586 13.9082 17.2358 13.1517 16.7794L9.51653 14.5866C9.19884 14.3949 8.80116 14.3949 8.48347 14.5866L4.84834 16.7794Z"
                            fill="#0E0E0E"
                          />
                        </svg>
                      </div>

                      <div className="company-logo">
                        <span>54 Reviews</span>
                      </div>
                    </div>
                    <p>
                      “He quickly delivered excellent design a per required
                      specifications. New landing page will have refreshing
                      simple look, while keeping page load light on images and
                      at the same keeping professional look. Finally, it also
                      seems very reasonable to implement responsive design, so
                      I'm very happy with that.”
                    </p>
                    <div className="border-line"></div>
                    <div className="testimonial-info d-flex align-items-center">
                      <img
                        loading="lazy"
                        src="https://randomuser.me/api/portraits/women/68.jpg"
                        alt="Emma Davis"
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h4>Emma Davis</h4>
                        <p className="mb-0">Art Director</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default TestimonialArea;
