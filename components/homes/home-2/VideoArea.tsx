"use client";

import { useEffect } from "react";
import "jarallax/dist/jarallax.css";
import { motion } from "framer-motion";

type VideoAreaProps = {
  style_2?: boolean;
};

const counter_data = [
  {
    label: "Competitive Rates",
    description:
      "Benefit from competitive rates with Sole Digital  Media's expert strategies. Increase your online presence and attract more customers in the MENA region without breaking your budget.",
  },
  {
    label: "Premium Development",
    description:
      "Experience premium development services with Sole Digital Media We deliver tailored solutions for robust websites and applications, ensuring top-notch performance and user satisfaction in the MENA market.",
  },
  {
    label: "No Contracts Needed",
    description:
      "At Sole Digital  Media, enjoy services without the hassle of contracts. Benefit from flexible solutions tailored for the MENA region, ensuring convenience and peace of mind for your business.",
  },
];

const VideoArea: React.FC<VideoAreaProps> = ({ style_2 }) => {
  useEffect(() => {
    let closePopup: (() => void) | undefined;

    if (typeof window !== "undefined") {
      import("jarallax").then(({ jarallax }) => {
        jarallax(document.querySelectorAll<HTMLElement>(".jarallax"), {
          speed: 0.6,
        });
      });

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
        const openHandler = (event: Event) => {
          const target = event.currentTarget as HTMLElement;
          const videoUrl = target.getAttribute("data-video");
          if (videoUrl) {
            const updatedUrl =
              videoUrl.includes("youtube.com") ||
              videoUrl.includes("youtu.be") ||
              videoUrl.includes("vimeo.com")
                ? `${videoUrl}?autoplay=1`
                : videoUrl;
            videoFrame.src = updatedUrl;
            videoPopup.style.display = "flex";
          }
        };

        const buttons = document.querySelectorAll<HTMLElement>(".video-btn");
        buttons.forEach((btn) => btn.addEventListener("click", openHandler));

        closePopup = () => {
          if (videoPopup && videoFrame) {
            videoPopup.style.display = "none";
            videoFrame.src = "";
          }
        };

        closeBtn.onclick = closePopup;
        window.addEventListener("click", (event: MouseEvent) => {
          if (event.target === videoPopup) closePopup?.();
        });

        return () => {
          buttons.forEach((btn) =>
            btn.removeEventListener("click", openHandler)
          );
          window.removeEventListener("click", () => {});
        };
      }
    }
  }, []);

  return (
    <>
      {!style_2 && (
        <div
          id="videoPopup"
          className="video-popup-iframe"
          role="dialog"
          aria-modal="true"
          style={{ zIndex: "9999" }}
        >
          <div className="video-content">
            <span
              className="close-btn"
              id="videoCloseButton"
              aria-label="Close video popup"
            >
              &times;
            </span>
            <div className="ratio ratio-16x9">
              <iframe
                id="videoFrame"
                title="Promotional Video"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <div className="cta-video-wrapper">
        {style_2 && <div className="divider"></div>}

        <div className="container">
          {!style_2 && (
            <div
              className="video-wrap"
              style={{ borderRadius: "20px", overflow: "hidden" }}
              aria-label="Promotional background video"
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

          <div className="row g-4 g-lg-5" aria-label="Service Highlights">
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
