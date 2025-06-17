import Link from "next/link";
import React from "react";

const portfolioData = [
  {
    category: "Food and Beverage",
    projects: [
      {
        title: "Burger",
        image: "/assets/img/burger/burger1.jpg",
        description:
          "Burger project showcases a dynamic blend of creativity and strategy tailored specifically for the food and beverage industry. Designed to highlight the bold personality of a modern burger brand, this work reflects our commitment to turning taste into a visual experience.",
        details: [
          {
            label: "Brand-Centric Design",
            text: "Clean, modern aesthetics with bold typography and color palettes inspired by the brand's flavor profile.",
          },
          {
            label: "Interactive Elements",
            text: "Hover effects, call-to-action buttons, and enticing imagery that encourages users to explore the menu.",
          },
          {
            label: "User Experience (UX)",
            text: "Streamlined interface designed for quick browsing and effortless ordering.",
          },
        ],
        gallery: [
          "/assets/img/burger/burger2.jpg",
          "/assets/img/burger/burger3.jpg",
          "/assets/img/burger/burger4.jpg",
        ],
      },
    ],
  },
  {
    category: "Sport",
    projects: [
      {
        title: "Pulse",
        image: "/assets/img/pulse/pulse1.jpg",
        description:
          "Pulse is a high-energy digital experience crafted for the sports and athletic content industry. Built to celebrate speed and skill, Pulse turns every match, highlight, and moment into a fully immersive media journey tailored for today’s fans.",
        details: [
          {
            label: "Visual Identity",
            text: "Bold, dark-themed interface with vibrant accent colors inspired by sports branding—creating an energetic and modern viewing experience.",
          },
          {
            label: "Interactive Video Playback",
            text: "Custom video popups, hover-activated highlights, and native support for MP4 ensure fast, frictionless streaming.",
          },
          {
            label: "Responsive & Optimized UX",
            text: "Built with scalability in mind, from mobile to widescreen—prioritizing fast load times, smooth transitions, and intuitive navigation.",
          },
        ],
        gallery: [
          "/assets/img/pulse/pulse2.jpg",
          "/assets/img/pulse/pulse3.jpg",
          "/assets/img/pulse/pulse4.jpg",
        ],
      },
    ],
  },
  {
    category: "Travel",
    projects: [
      {
        title: "Tour Guide",
        image: "/assets/img/tourGuide/tou1.jpg",
        description:
          "Tour Guide is an immersive digital platform built for the travel and tourism industry. Designed to inspire exploration and simplify planning, Tour Guide helps users discover destinations, experiences, and itineraries through intuitive navigation and visual storytelling.",

        details: [
          {
            label: "Visual Identity",
            text: "A bright, inviting interface with scenic imagery and clear typography evokes the spirit of adventure and wanderlust.",
          },
          {
            label: "Interactive Experience Discovery",
            text: "Custom interactive maps, video previews, and scroll-based animations let users explore trips, activities, and cultures with ease.",
          },
          {
            label: "Optimized Travel Planning UX",
            text: "Responsive layout and seamless booking integration offer a smooth experience across all devices—from inspiration to itinerary.",
          },
        ],
        gallery: [
          "/assets/img/tourGuide/tour2.jpg",
          "/assets/img/tourGuide/tour3.jpg",
          "/assets/img/tourGuide/tour4.jpg",
        ],
      },
    ],
  },
  {
    category: "Real Estate",
    projects: [
      {
        title: "Home Arrow",
        image: "/assets/img/homeArrow/arrow1.jpg",
        description:
          "Home Arrow is a modern real estate platform built to simplify property discovery and elevate the home-buying experience. From interactive listings to intuitive search and virtual tours, Home Arrow empowers users to explore, compare, and connect with confidence.",

        details: [
          {
            label: "Visual Identity",
            text: "Clean, professional layout with elegant typography and subtle color accents conveys trust, clarity, and modernity in the real estate space.",
          },
          {
            label: "Interactive Property Exploration",
            text: "Integrated search filters, image sliders, embedded maps, and video walkthroughs allow users to explore homes in detail before visiting.",
          },
          {
            label: "Optimized Buyer Experience",
            text: "Responsive design and smooth navigation guide users through listings, inquiries, and lead generation on both mobile and desktop.",
          },
        ],
        gallery: [
          "/assets/img/homeArrow/arrow2.jpg",
          "/assets/img/homeArrow/arrow3.jpg",
          "/assets/img/homeArrow/arrow4.jpg",
        ],
      },
    ],
  },
  {
  category: "Aesthetics and Cosmetics",
  projects: [
    {
      title: "Extra Beauty",
      image: "/assets/img/extraBeauty/b1.jpg",
      description:
        "Extra Beauty is a refined digital platform created for the aesthetics and cosmetics industry. Designed to reflect elegance, self-care, and modern beauty trends, it connects clients with services, treatments, and brand identity through a luxurious digital experience.",

      details: [
        {
          label: "Elegant Visual Identity",
          text: "Soft color palettes, minimal design, and clean typography deliver a luxurious, calming aesthetic that aligns with wellness and beauty standards."
        },
        {
          label: "Service & Treatment Showcase",
          text: "Interactive treatment pages, service filtering, and detailed visuals guide clients to explore offerings with clarity and confidence."
        },
        {
          label: "Client-Centered UX",
          text: "Responsive design, easy booking flows, and mobile optimization ensure an intuitive and soothing experience from homepage to appointment."
        }
      ],

      gallery: [
        "/assets/img/extraBeauty/b2.jpg",
        "/assets/img/extraBeauty/b3.jpg",
        "/assets/img/extraBeauty/b4.jpg"
      ]
    }
  ]
}

];

const PortfolioArea = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="divider"></div>
      <div className="container">
        {portfolioData.map((section, idx) => (
          <div key={idx} className="mb-5">
            <h1>{section.category}:</h1>
            {section.projects.map((project, pIdx) => (
              <div key={pIdx} className="row g-4 g-xl-5 align-items-center">
                <div className="col-12 col-md-6">
                  <div className="portfolio-card">
                    <img src={project.image} alt={project.title} />
                    <div className="portfolio-overlay-content d-flex align-items-center justify-content-between">
                      <div className="me-4">
                        <h3 className="mb-0">Website Design</h3>
                        <p className="mb-0">Branding Design</p>
                      </div>
                      <Link href="/portfolio" className="btn">
                        <span>→</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <p>
                    <strong>{project.title}</strong> {project.description}
                  </p>
                  <h6 className="mt-4">What We Did:</h6>
                  <ul>
                    {project.details.map((item, i) => (
                      <li key={i}>
                        <strong>{item.label}:</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Gallery Images */}
                {project.gallery && (
                  <div className="row g-4 g-xl-5 mt-2">
                    {project.gallery.map((img, i) => (
                      <div key={i} className="col-12 col-md-4">
                        <div className="portfolio-card">
                          <img src={img} alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default PortfolioArea;
