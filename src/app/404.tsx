import ErrorArea from "@/components/error";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata = {
  title:
    "404 Error ||Sole Digital Media - Creative Digital Agency for Branding & Web Solutions",
  description:
    "Sole Digital Media -  Creative Digital Agency for Branding & Web Solutions",
  icons: {
    icon: "/src/app/favicon.ico",
  },
};

const NotFoundPage = () => {
  return (
    <Wrapper>
      <ErrorArea />
    </Wrapper>
  );
};

export default NotFoundPage;
