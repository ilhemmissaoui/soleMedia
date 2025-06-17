import VideoArea from "./VideoArea";
import MissionArea from "./MissionArea";
import ServiceArea from "./ServiceArea";
import ProjectArea from "./ProjectArea";
import CategoryArea from "./CategoryArea";
import ProcessArea from "./ProcessArea";
import FaqArea from "./FaqArea";
import TestimonialArea from "./TestimonialArea";
import BlogArea from "./BlogArea";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import TikTok from "./TikTik";
import HeroArea from "../home/HeroArea";

const HomeTwo = () => {
  return (
    <>
      <HeaderOne style_2={true} />
      <HeroArea />
      <VideoArea />
      <MissionArea />
      <ServiceArea />
      <TikTok />
      <ProjectArea />
      <CategoryArea />
      <ProcessArea />
      {/* <TeamArea /> */}
      {/* <PriceArea /> */}
      <FaqArea />
      <TestimonialArea />
      <BlogArea />
      <FooterOne style_2={true} />
    </>
  );
};

export default HomeTwo;
