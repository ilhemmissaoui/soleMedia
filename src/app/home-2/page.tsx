import HomeTwo from "@/components/homes/home-2";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Home 2 SoleDigital - Creative Digital Agency ",
  description: "SoleDigital - Creative Digital Agency HTML Template",
  icons: {
    icon: "/assets/img/logo3.svg", // or "favicon.ico" or any path inside /public
  },
};

const index = () => {
  return (
    <Wrapper>
      <HomeTwo />
    </Wrapper>
  );
};

export default index;
