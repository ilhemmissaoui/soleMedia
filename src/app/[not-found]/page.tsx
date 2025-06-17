import ErrorArea from "@/components/[error]";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata = {
  title: "404 Error || SoleDigital - Creative Digital Agency ",
  description: "SoleDigital - Creative Digital Agency HTML Template",
  icons: {
    icon: "/assets/img/logo3.svg", // or "favicon.ico" or any path inside /public
  },
};

const index = () => {
  return (
    <Wrapper>
      <ErrorArea />
    </Wrapper>
  );
};

export default index;
