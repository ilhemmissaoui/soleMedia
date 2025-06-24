"use client";

import "jarallax/dist/jarallax.css";
import { motion } from "framer-motion";

type VideoAreaProps = {
  style_2?: boolean;
};



const VideoArea: React.FC<VideoAreaProps> = ({ style_2 }) => {
  return (
    <>
      <div className="cta-video-wrapper">
        {style_2 && <div className="divider"></div>}

        <div className="container">
          {!style_2 && (
            <div
              className="video-wrap"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
              }}
              aria-label="Promotional inline video"
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
                  src="https://dl.dropboxusercontent.com/scl/fi/wdk6cy3c9sl6i8rho3hn5/Final-Comp.mp4?rlkey=atjxt60murhv72v34unmhoowr&st=rmcjb88c"
                  type="video/mp4"
                />
              </video>
            </div>
          )}

          
              <motion.div
               
                className="col-12 col-md-12"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
               
                
              <h2>Sole Digital Media's TikTok Agency</h2>
              <p>
                We specialize in helping brands grow through creative,
                high-performing short-form video content. We craft tailored
                TikTok strategies that drive engagement, build brand awareness,
                and connect with Gen Z and Millennial audiences.
              </p>
              <p>
                From content creation and influencer partnerships to paid ad
                campaigns and trend optimization — we make TikTok work for you.
              </p>
          
                 <div className="divider"></div>
              </motion.div>
         
          
        </div>

      </div>
    </>
  );
};

export default VideoArea;
