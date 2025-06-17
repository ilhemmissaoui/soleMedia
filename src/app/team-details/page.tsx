import TeamDetails from "@/components/team-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Team Details SoleDigital - Creative Digital Agency ",
  description: "SoleDigital - Creative Digital Agency HTML Template",
  icons: {
    icon: "/assets/img/logo3.svg", // or "favicon.ico" or any path inside /public
  },
};

const index = () => {
  return (
    <Wrapper>
      <TeamDetails />
    </Wrapper>
  );
};

export default index;
