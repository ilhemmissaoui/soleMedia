"use client";

import { useEffect, useRef } from "react";
import "jarallax/dist/jarallax.css";

const VideoArea: React.FC = () => {
  const videoPopupRef = useRef<HTMLDivElement | null>(null);
  const videoTagRef = useRef<HTMLVideoElement | null>(null);
  const sourceRef = useRef<HTMLSourceElement | null>(null);

  useEffect(() => {
    const videoPopup = videoPopupRef.current;
    const videoTag = videoTagRef.current;
    const sourceTag = sourceRef.current;

    if (videoPopup && videoTag && sourceTag) {
      document.querySelectorAll<HTMLElement>(".video-btn").forEach((button) => {
        button.addEventListener("click", function () {
          const videoUrl = (this as HTMLElement).getAttribute("data-video");
          if (videoUrl) {
            // Optional: replace Dropbox share link with direct download link
            const directUrl = videoUrl.replace("www.dropbox.com", "dl.dropboxusercontent.com").replace("?dl=0", "");

            sourceTag.src = directUrl;
            videoTag.load(); // Reload video with new source
            videoTag.play(); // Optional: autoplay
            videoPopup.style.display = "flex";
          }
        });
      });

      const closeVideoPopup = () => {
        videoPopup.style.display = "none";
        videoTag.pause();
        sourceTag.src = "";
        videoTag.load(); // Clear the video
      };

      document
        .getElementById("videoCloseButton")
        ?.addEventListener("click", closeVideoPopup);
      window.addEventListener("click", (event: MouseEvent) => {
        if (event.target === videoPopup) closeVideoPopup();
      });

      return () => {
        window.removeEventListener("click", closeVideoPopup);
      };
    }
  }, []);

  return (
    <>
      <div
        className="jarallax"
        data-jarallax
        data-speed="0.6"
        style={{ zIndex: "9999" }}
      >
        {/* Video Popup */}
        <div ref={videoPopupRef} id="videoPopup" className="video-popup-iframe">
          <div className="video-content">
            <span className="close-btn" id="videoCloseButton">
              &times;
            </span>
            <div className="ratio ratio-16x9" style={{ width: "100%" }}>
              <video
                ref={videoTagRef}
                controls
                style={{ width: "100%", height: "100%" }}
              >
                <source ref={sourceRef} src="" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      <div
        className="video-wrapper"
        data-jarallax
        data-speed="0.6"
        style={{
          backgroundImage: `url(/assets/img/phone-screen-girl-and-ring-light-for-live-streami-2025-04-06-07-24-53-utc.jpg)`,
          backgroundAttachment: "fixed",
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="video-popup">
          <div className="popup-video">
            <div
              className="video-btn wow fadeInUp"
              data-wow-duration="1000ms"
              data-wow-delay="1000ms"
              data-video="https://www.dropbox.com/scl/fi/wdk6cy3c9sl6i8rho3hn5/Final-Comp.mp4?rlkey=atjxt60murhv72v34unmhoowr&st=rmcjb88c&dl=0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_1_434)">
                  <path
                    d="M5.10545 0.529181C2.94172 -0.711968 1.1875 0.304796 1.1875 2.79837V21.1999C1.1875 23.6959 2.94172 24.7114 5.10545 23.4714L21.1893 14.2474C23.3538 13.0059 23.3538 10.9943 21.1893 9.753L5.10545 0.529181Z"
                    fill="#0E0E0E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_434">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="video-sonar"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoArea;
