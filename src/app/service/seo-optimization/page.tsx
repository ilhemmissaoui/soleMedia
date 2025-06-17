import ServiceDetails from "@/components/service-details/seo-optimization";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Service Details SoleDigital - Creative Digital Agency ",
  description: "SoleDigital - Creative Digital Agency HTML Template",
  icons: {
    icon: "/assets/img/logo3.svg", // or "favicon.ico" or any path inside /public
  },
};

const index = () => {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;
