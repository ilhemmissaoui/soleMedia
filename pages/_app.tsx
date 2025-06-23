import "../styles/index.css";

import type { AppProps } from "next/app";
import Wrapper from "../layouts/Wrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
