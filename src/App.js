import { ChakraProvider } from "@chakra-ui/react";

import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Nav></Nav>
        <main>
          <Gallery></Gallery>
          <About></About>
        </main>
      </div>
    </ChakraProvider>
  );
}

export default App;
