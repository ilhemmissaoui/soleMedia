import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
  title: string;
  subtitle: string;
}

const Breacrumb: React.FC<BreadcrumbProps> = ({ title, subtitle }) => {
  return (
    <div
      className="breadcrumb-wrapper bg-img jarallax bg-overlay"
      data-jarallax=""
      data-speed="0.6"
      style={{
        backgroundImage:
          "url(/assets/img/three-confident-professional-businessmen-in-formal-2024-11-18-09-35-51-utc.jpg)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container h-100">
        <div className="breadcrumb-content h-100">
          <h2
            className="wow fadeInUp"
            data-wow-duration="1000ms"
            data-wow-delay="700ms"
          >
            {title}
          </h2>
          <ul
            className="list-unstyled wow fadeInUp"
            data-wow-duration="1000ms"
            data-wow-delay="1000ms"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>{subtitle}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breacrumb;
