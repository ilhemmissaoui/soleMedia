import "../styles/index.css"; // ✅ Only here for global CSS

import { AppProps } from "next/app";
import Wrapper from "../layouts/Wrapper"; // If you want global layout applied to all pages

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;