"use client";

import { useEffect, useRef } from "react";
import "jarallax/dist/jarallax.css";

const VideoAreaHomeOne: React.FC = () => {
  const videoPopupRef = useRef<HTMLDivElement | null>(null);
  const videoFrameRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const handleButtonClick = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const videoUrl = target.getAttribute("data-video");
      if (videoUrl && videoPopupRef.current && videoFrameRef.current) {
        const updatedUrl =
          videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")
            ? `${videoUrl}?autoplay=1`
            : videoUrl.includes("vimeo.com")
            ? `${videoUrl}?autoplay=1`
            : videoUrl;

        videoFrameRef.current.src = updatedUrl;
        videoPopupRef.current.style.display = "flex";
      }
    };

    const closeVideoPopup = () => {
      if (videoPopupRef.current && videoFrameRef.current) {
        videoPopupRef.current.style.display = "none";
        videoFrameRef.current.src = "";
      }
    };

    const popupButtons = document.querySelectorAll<HTMLElement>(".video-btn");
    popupButtons.forEach((btn) => btn.addEventListener("click", handleButtonClick));

    document
      .getElementById("videoCloseButton")
      ?.addEventListener("click", closeVideoPopup);

    const handleWindowClick = (event: MouseEvent) => {
      if (event.target === videoPopupRef.current) {
        closeVideoPopup();
      }
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      popupButtons.forEach((btn) => btn.removeEventListener("click", handleButtonClick));
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <>
      <div
        className="jarallax mb-30"
        data-jarallax
        data-speed="0.6"
        style={{ zIndex: 9999 }}
      >
        {/* Video Popup */}
        <div
          ref={videoPopupRef}
          id="videoPopup"
          className="video-popup-iframe"
          aria-modal="true"
          role="dialog"
        >
          <div className="video-content">
            <button className="close-btn" id="videoCloseButton" aria-label="Close Video">
              &times;
            </button>
            <div className="ratio ratio-16x9">
              <iframe
                ref={videoFrameRef}
                id="videoFrame"
                title="Sole Digital Media Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div
        className="video-wrapper jarallax"
        data-jarallax
        data-speed="0.6"
        style={{
          backgroundImage: `url(/assets/img/about.jpg)`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="video-popup">
          <div className="popup-video">
            <div
              className="video-btn wow fadeInUp"
              data-wow-duration="1000ms"
              data-wow-delay="1000ms"
              data-video="https://www.dropbox.com/scl/fi/1mm9enwn15ll6xbxliwhq/Render-Video-01_1920x1080_3.mp4?rlkey=9h2txoteydfxycwucn02zjkzp&raw=1"
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

export default VideoAreaHomeOne;
