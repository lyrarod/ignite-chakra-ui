import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    black: "#000000",
    white: "#ffffff",
    bgColor: "#F5F8FA",
    highlight: "#FFBA08",
    highlight50: "rgba(255, 186, 8, 0.5);",

    dark: {
      headingsAndText: "#47585B",
      info: "#999999",
      info50: "rgba(153, 153, 153, 0.5)",
    },

    light: {
      headingsAndText: "#F5F8FA",
      info: "#DADADA",
    },
  },

  fonts: {
    heading: `Poppins, sans-serif`,
    body: `Poppins, sans-serif`,
  },

  styles: {
    global: {
      body: {
        color: "light.headingsAndText",
        backgroundColor: "bgColor",
      },
    },
  },
});
