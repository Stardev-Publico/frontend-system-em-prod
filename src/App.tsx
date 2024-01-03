import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes />
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
