import "../styles/globals.css";
import MainLayout from "../src/components/Layout";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import {StoreProvider} from "../src/Context/Store";



function MyApp({ Component, pageProps }) {


  const colors = {
    brand: {
      50: "#f5f5f5",
      100: "#e8e8e8",
      200: "#d1d1d1",
      300: "#b9b9b9",
      400: "#8c8c8c",
      500: "#5f5f5f",
    },
  };

  const fonts = {
    heading: "Roboto",
    body: "Roboto",
  };

  const config = {
    
    initialColorMode: "light",
    useSystemColorMode: false,
    matchMedia: {
      dark: "(prefers-color-scheme: dark)",
      light: "(prefers-color-scheme: light)",
    },
  };

  const components = {
 
    Button: {
      baseStyle: {
        fontWeight: "semibold",
      },
      variants: {
        "with-shadow": {
          bg: "green.400",
          boxShadow: "0 0 2px 2px #efdfde",
        },
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "green.300" : "purple.500",
        }),
      },
      defaultProps: {
        variant: "solid",
      },
    },
  };

  const theme = extendTheme({ colors, fonts, config, components });

  return (
      <StoreProvider>
    <ChakraProvider theme={theme} >
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
    </StoreProvider>
  );
}


export default MyApp;
