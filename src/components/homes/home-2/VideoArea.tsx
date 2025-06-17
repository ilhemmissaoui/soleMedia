"use client";

import { useEffect } from "react";
import "jarallax/dist/jarallax.css";
import Count from "@/common/count";
import { motion } from "framer-motion";

const counter_data = [
  {
    label: "Competitive Rates",
    description:
      "Benefit from competitive rates with One Digital Media's expert strategies. Increase your online presence and attract more customers in the MENA region without breaking your budget.",
  },
  {
    label: "Premium Development",
    description:
      "Experience premium development services with One Digital Media. We deliver tailored solutions for robust websites and applications, ensuring top-notch performance and user satisfaction in the MENA market.",
  },
  {
    label: "No Contracts Needed",
    description:
      "At One Digital Media, enjoy services without the hassle of contracts. Benefit from flexible solutions tailored for the MENA region, ensuring convenience and peace of mind for your business.",
  },
];

const VideoArea = ({ style_2 }: any) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Importing jarallax dynamically
      import("jarallax").then(({ jarallax }) => {
        jarallax(document.querySelectorAll<HTMLElement>(".jarallax"), {
          speed: 0.6,
        });
      });

      // Video popup logic
      const videoPopup = document.getElementById(
        "videoPopup"
      ) as HTMLDivElement | null;
      const videoFrame = document.getElementById(
        "videoFrame"
      ) as HTMLIFrameElement | null;
      const closeBtn = document.getElementById(
        "videoCloseButton"
      ) as HTMLSpanElement | null;

      if (videoPopup && videoFrame && closeBtn) {
        document
          .querySelectorAll<HTMLElement>(".video-btn")
          .forEach((button) => {
            button.addEventListener("click", function () {
              const videoUrl = (this as HTMLElement).getAttribute("data-video");
              if (videoUrl) {
                let updatedUrl = videoUrl;
                if (
                  videoUrl.includes("youtube.com") ||
                  videoUrl.includes("youtu.be")
                ) {
                  updatedUrl += "?autoplay=1";
                } else if (videoUrl.includes("vimeo.com")) {
                  updatedUrl += "?autoplay=1";
                }
                videoFrame.src = updatedUrl;
                videoPopup.style.display = "flex";
              }
            });
          });

        // Close button functionality
        closeBtn.onclick = () => {
          videoPopup.style.display = "none";
          videoFrame.src = "";
        };

        // Clicking outside of the video popup closes it
        window.onclick = (event: MouseEvent) => {
          if (event.target === videoPopup) {
            videoPopup.style.display = "none";
            videoFrame.src = "";
          }
        };
      }
    }
  }, []);

  return (
    <>
      {style_2 ? null : (
        <div
          id="videoPopup"
          className="video-popup-iframe"
          style={{ zIndex: "9999" }}
        >
          <div className="video-content">
            <span className="close-btn" id="videoCloseButton">
              &times;
            </span>
            <div className="ratio ratio-16x9">
              <iframe id="videoFrame" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      )}

      <div className="cta-video-wrapper">
        {style_2 ? <div className="divider"></div> : null}
        <div className="container">
          {style_2 ? null : (
            <div
              className="video-wrap"
              style={{ borderRadius: "20px", overflow: "hidden" }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              >
                <source
                  src="https://www.dropbox.com/scl/fi/5ho9ph3qgknhbumrm4r1f/Final-Comp_5-1.mp4?rlkey=8a3fp07moq2ujbg8r8agmn3va&st=3ep5agc7&raw=1"
                  type="video/mp4"
                />
              </video>
            </div>
          )}

          <div className="row g-4 g-lg-5">
            {counter_data.map((item, i) => (
              <motion.div
                key={i}
                className="col-12 col-md-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="cta-content">
                  <h4>{item.label}</h4>
                  <p className="mb-0">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default VideoArea;
