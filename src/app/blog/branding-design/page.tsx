import BlogDetails from "@/components/blog-details/branding-design";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title:
    "Sole Digital Media - Creative Digital Agency for Branding & Web Solutions",
  description:
    "Sole Digital Media is a creative digital agency specializing in branding, web design, and digital marketing solutions to help your business grow and stand out online.",
  icons: {
    icon: "/src/app/favicon.ico", // or "favicon.ico" or any path inside /public
  },
};

const index = () => {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  );
};

export default index;
