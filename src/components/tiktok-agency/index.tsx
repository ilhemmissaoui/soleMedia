import Breacrumb from "@/common/BreacrumbTikTok";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Cta2Area from "../homes/home/Cta2Area";
import AboutArea from "../homes/home/AboutArea";
import WorkprocessArea from "../homes/home/WorkprocessArea";
import VideoAreaHomeOne from "../homes/home/VideoAreaHomeOne";
import TeamArea from "../homes/home-2/TeamArea";
import TestimonialArea from "../homes/home-2/TestimonialArea";
import FooterOne from "@/layouts/footers/FooterOne";
import CtaArea from "../homes/home/CtaArea";
import AboutTikTok from "../homes/home/AboutTikTok";
import VideoArea from "../homes/home-2/VideoTikTok";
import MissionAreaTikTok from "../homes/home-2/MissionAreaTikTok";
import TikTokSection from "../homes/home-2/TikTokSection";
import ProjectsArea from "../homes/home/ProjectsArea";

const TikTokAgency = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="TIKTOK " subtitle=" CREATOR NETWORK AGENCY" />
      <CtaArea />
      <AboutTikTok />
      {/* <ProjectsArea /> */}
      <VideoArea />
      <MissionAreaTikTok />
      {/* <WorkprocessArea /> */}
      {/* <VideoAreaHomeOne /> */}
      <TikTokSection />
      {/* <TestimonialArea /> */}
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default TikTokAgency;
