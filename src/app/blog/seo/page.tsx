import BlogDetails from "@/components/blog-details/seo";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Blog Details SoleDigital - Creative Digital Agency ",
  description: "SoleDigital - Creative Digital Agency HTML Template",
  icons: {
    icon: "/assets/img/logo3.svg", // or "favicon.ico" or any path inside /public
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
