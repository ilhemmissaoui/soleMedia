"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactArea = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState({ loading: false, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, message: "" });

    try {
      await emailjs.sendForm(
        "service_5aj4vhw",
        "template_9f1wt24",
        form.current!,
        "zB_69KChhj_zmQc6n"
      );
      setStatus({ loading: false, message: "Message sent successfully!" });
      form.current?.reset();
    } catch (error) {
      setStatus({
        loading: false,
        message: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <>
      <div className="contact-details-wrap">
        <div className="divider"></div>

        {/* Contact Info */}
        <div className="container">
          <div className="row g-4 justify-content-center">
            {/* Tunisia */}
            <div className="col-12 col-md-6 col-lg-6">
              <div className="contact-info-card">
                <p className="mb-0">Location</p>
                <h4>Tunisia</h4>
                <p className="mb-0">Av. de Yasser Arafat, Sousse 4054</p>

                <p className="mb-0 mt-3">Phone</p>
                <h4>+216 58 944 414</h4>

                <p className="mb-0 mt-3">Email</p>
                <h4>
                  <a href="mailto:info@soledigitalmedia.tn">
                    info@soledigitalmedia.tn
                  </a>
                </h4>
              </div>
            </div>

            {/* Canada */}
            <div className="col-12 col-md-6 col-lg-6">
              <div className="contact-info-card">
                <p className="mb-0">Location</p>
                <h4>Canada</h4>
                <p className="mb-0">
                  3465 Platinum Dr #208, Mississauga, ON L5M 2S1, Canada
                </p>

                <p className="mb-0 mt-3">Phone</p>
                <h4>+1(905) 745 4395</h4>

                <p className="mb-0 mt-3">Email</p>
                <h4>
                  <a href="mailto:info@soledigitalmedia.com">
                    info@soledigitalmedia.com
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Maps */}
        <div
          className="maps-wrap"
          style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
        >
          <div style={{ flex: "1 1 48%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1429.8955035107379!2d10.59548187347998!3d35.83896214465623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8a5fddb29dbb%3A0x7d47baa72181ea5d!2sRHQW%2BGMX%2C%20Sousse!5e1!3m2!1sfr!2stn!4v1747841737597!5m2!1sfr!2stn"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div style={{ flex: "1 1 48%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.476705063579!2d-79.72973526891491!3d43.53828367089082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b426d34dc55fd%3A0xd30f807b0d2e1b29!2s3465%20Platinum%20Dr%20%23208%2C%20Mississauga%2C%20ON%20L5M%202S1%2C%20Canada!5e1!3m2!1sfr!2stn!4v1747845224368!5m2!1sfr!2stn"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrap contact-page-form">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="contact-form bg-secondary m-0 mt-0">
                  <div className="section-heading text-center">
                    <h2>
                      Have Questions? <br />
                      Contact us!
                    </h2>
                  </div>

                  <div className="divider-sm"></div>

                  <form ref={form} onSubmit={handleSubmit}>
                    <div className="row g-4 g-xl-5">
                      <div className="col-12 col-lg-6">
                        <input
                          type="text"
                          name="user_name"
                          className="form-control"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="col-12 col-lg-6">
                        <input
                          type="email"
                          name="user_email"
                          className="form-control"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                      <div className="col-12 col-lg-6">
                        <input
                          type="text"
                          name="user_phone"
                          className="form-control"
                          placeholder="Your Phone"
                        />
                      </div>
                      <div className="col-12 col-lg-6">
                        <select className="form-control" name="subject">
                          <option value="">Select Subject</option>
                          <option value="Help & Support">Help & Support</option>
                          <option value="Features Inquiry">
                            Features Inquiry
                          </option>
                        </select>
                      </div>
                      <div className="col-12">
                        <textarea
                          name="message"
                          className="form-control"
                          rows={6}
                          placeholder="Type your message"
                          required
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary rounded-pill"
                            disabled={status.loading}
                          >
                            <span>
                              {status.loading ? "Sending..." : "SEND MESSAGE"}
                            </span>
                            <span>
                              {status.loading ? "Sending..." : "SEND MESSAGE"}
                            </span>
                          </button>
                          {status.message && (
                            <p className="mt-3">{status.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
