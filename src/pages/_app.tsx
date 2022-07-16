import { Header } from "../components/Header";

import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";

import { theme } from "../styles/theme";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Custom Swiper styles
import "../styles/swiper.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
