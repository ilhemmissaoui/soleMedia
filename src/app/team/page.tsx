import Team from "@/components/team";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Team SoleDigital - Creative Digital Agency ",
  description: "SoleDigital - Creative Digital Agency HTML Template",
  icons: {
    icon: "/assets/img/logo3.svg", // or "favicon.ico" or any path inside /public
  },
};

const index = () => {
  return (
    <Wrapper>
      <Team />
    </Wrapper>
  );
};

export default index;
