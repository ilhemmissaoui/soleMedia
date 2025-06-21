import Link from "next/link";
import React from "react";

const TikTok = () => {
  return (
    <>
      <div className="about-us-wrapper position-relative">
        {/* Add background decoration */}
        <div className="background-decoration"></div>

        <div className="divider"></div>
        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">
            <div className="col-12 col-md-6">
              <div className="about-us-thumbnail position-relative animate-float">
                <img
                  src="/assets/img/about.jpg"
                  alt=""
                  className="main-image"
                />
                <div className="experience-badge">
                  <span className="years">10+</span>
                  <span className="text">Years of Experience</span>
                </div>
                <div className="top-content glassmorphism">
                  <div className="clients-images">
                    <img
                      src="https://randomuser.me/api/portraits/women/1.jpg"
                      alt="Client 1"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/2.jpg"
                      alt="Client 2"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/3.jpg"
                      alt="Client 3"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/4.jpg"
                      alt="Client 4"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h6 className="mb-0 client-count">
                    2566+ Satisfied Clients Worldwide
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="about-us-text-content ps-md-4">
                <div className="section-heading">
                  <span className="subtitle">Welcome to</span>
                  <h3 className="mb-3 gradient-text">Sole Digital Media</h3>
                </div>
                <h6 className="mb-0">
                  Our services will help you provide the best solutionso that
                  your business can runsmoothly.
                </h6>
                <p>
                  Sole Digital Media is a full-service digital marketing and
                  creative agency dedicated to building impactful digital
                  experiences for businesses, creators, and organizations across
                  the globe. As a modern and agile agency, we combine strategic
                  thinking, innovative design, and cutting-edge technology to
                  help our clients grow, engage, and lead in an increasingly
                  digital world.
                </p>
                <ul className="feature-list ps-0 list-unstyled mb-4">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M12.1473 23.354C12.144 23.354 12.1402 23.354 12.1369 23.354C12.0013 23.3512 11.8733 23.2932 11.7814 23.1937L2.40471 12.9978C2.24392 12.8228 2.22916 12.5592 2.36971 12.3672C2.51025 12.1758 2.76619 12.1102 2.98166 12.2108L11.5638 16.2293C11.636 16.2632 11.7213 16.2468 11.7765 16.1893L24.8676 2.50708C25.0448 2.32169 25.3346 2.30145 25.5359 2.46114C25.7371 2.62083 25.7836 2.90739 25.6431 3.12231L12.6209 23.0712C12.6023 23.1002 12.5804 23.1265 12.5563 23.1511L12.4989 23.2085C12.4054 23.3015 12.2785 23.354 12.1473 23.354Z"
                        fill="#FEFEFE"
                      />
                    </svg>
                    Creative Design Excellence
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M12.1473 23.354C12.144 23.354 12.1402 23.354 12.1369 23.354C12.0013 23.3512 11.8733 23.2932 11.7814 23.1937L2.40471 12.9978C2.24392 12.8228 2.22916 12.5592 2.36971 12.3672C2.51025 12.1758 2.76619 12.1102 2.98166 12.2108L11.5638 16.2293C11.636 16.2632 11.7213 16.2468 11.7765 16.1893L24.8676 2.50708C25.0448 2.32169 25.3346 2.30145 25.5359 2.46114C25.7371 2.62083 25.7836 2.90739 25.6431 3.12231L12.6209 23.0712C12.6023 23.1002 12.5804 23.1265 12.5563 23.1511L12.4989 23.2085C12.4054 23.3015 12.2785 23.354 12.1473 23.354Z"
                        fill="#FEFEFE"
                      />
                    </svg>
                    Effective Digital Marketing Strategies
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M12.1473 23.354C12.144 23.354 12.1402 23.354 12.1369 23.354C12.0013 23.3512 11.8733 23.2932 11.7814 23.1937L2.40471 12.9978C2.24392 12.8228 2.22916 12.5592 2.36971 12.3672C2.51025 12.1758 2.76619 12.1102 2.98166 12.2108L11.5638 16.2293C11.636 16.2632 11.7213 16.2468 11.7765 16.1893L24.8676 2.50708C25.0448 2.32169 25.3346 2.30145 25.5359 2.46114C25.7371 2.62083 25.7836 2.90739 25.6431 3.12231L12.6209 23.0712C12.6023 23.1002 12.5804 23.1265 12.5563 23.1511L12.4989 23.2085C12.4054 23.3015 12.2785 23.354 12.1473 23.354Z"
                        fill="#FEFEFE"
                      />
                    </svg>
                    Client Satisfaction and Growth
                  </li>
                </ul>

                <div className="cta-buttons">
                  <a
                    href="/service"
                    className="btn btn-primary btn-gradient me-3"
                  >
                    <span>Our Services</span>
                  </a>
                  <Link href="/contact" className="btn btn-outline">
                    <span>Get in Touch</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </div>

      <style jsx>{`
        .about-us-wrapper {
          overflow: hidden;
          padding: 100px 0;
        }

        .background-decoration {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(2, 163, 171, 0.05) 0%,
            rgba(255, 151, 30, 0.05) 100%
          );
          z-index: -1;
        }

        .main-image {
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .experience-badge {
          position: absolute;
          right: -30px;
          bottom: 30%;
          background: #02a3ab;
          color: white;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(2, 163, 171, 0.2);
        }

        .experience-badge .years {
          font-size: 2.5rem;
          font-weight: bold;
          display: block;
        }

        .glassmorphism {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .gradient-text {
          background: linear-gradient(135deg, #02a3ab, #ff971e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 3rem;
          font-weight: bold;
        }

        .subtitle {
          color: #ff971e;
          font-size: 1.1rem;
          font-weight: 500;
          display: block;
          margin-bottom: 10px;
        }

        .feature-list li {
          background: rgba(2, 163, 171, 0.05);
          margin-bottom: 10px;
          padding: 15px;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .feature-list li:hover {
          transform: translateX(10px);
          background: rgba(2, 163, 171, 0.1);
        }

        .btn-gradient {
          background: linear-gradient(135deg, #02a3ab, #ff971e);
          border: none;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .btn-outline {
          border: 2px solid #02a3ab;
          color: #02a3ab;
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          background: #02a3ab;
          color: white;
        }
      `}</style>
    </>
  );
};

export default TikTok;
