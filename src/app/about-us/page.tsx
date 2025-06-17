import Aboutus from "@/components/about-us";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "About us SoleDigital - Creative Digital Agency ",
  description: "SoleDigital - Creative Digital Agency HTML Template",
  icons: {
    icon: "/assets/img/logo3.svg", // or "favicon.ico" or any path inside /public
  },
};

const index = () => {
  return (
    <Wrapper>
      <Aboutus />
    </Wrapper>
  );
};

export default index;
