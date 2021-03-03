import React from "react";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark",
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box maxW="lg" m={2} pt={10} className="baseContainer">
        <Home />
      </Box>
      {/* <div className="baseContainer">
     borderWidth="1px" borderRadius="lg"
      </div> */}
    </ChakraProvider>
  );
};

export default App;
