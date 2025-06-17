import React from "react";

const CtaArea = () => {
  return (
    <>
      <div
        className="cta-wrap "
        data-jarallax=""
        data-speed="0.6"
        style={{
          backgroundImage:
            "url(/assets/img/group-of-influencer-connecting-live-streaming-on-s-2024-12-03-20-16-35-utc.jpg)",
          backgroundAttachment: "fixed",
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-end">
            <div className="col-12 col-sm-11 col-md-10 col-lg-7 col-xl-6 col-xxl-5">
              <div className="cta-card">
                <div className="total-clients-wrap">
                  <div className="total-number">
                    <h3>1K+</h3>
                    <p className="mb-0">Number of views</p>
                  </div>

                  <div className="clients-images">
                    <img src="https://randomuser.me/api/portraits/women/1.jpg" />
                    <img src="https://randomuser.me/api/portraits/men/2.jpg" />
                    <img src="https://randomuser.me/api/portraits/women/3.jpg" />
                    <img src="https://randomuser.me/api/portraits/men/4.jpg" />
                  </div>
                </div>

                <div className="cta-stats">
                  <div>
                    <h3>Growing</h3>
                    <p className="mb-0">TikTok Network</p>
                  </div>

                  <div>
                    <h3>Viral</h3>
                    <p className="mb-0">Visibility</p>
                  </div>

                  <div>
                    <h3>Trusted</h3>
                    <p className="mb-0">Leading Brands</p>
                  </div>

                  <div>
                    <h3>Daily</h3>
                    <p className="mb-0">Live </p>
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

export default CtaArea;
