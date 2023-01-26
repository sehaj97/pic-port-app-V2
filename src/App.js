import { ChakraProvider } from "@chakra-ui/react";

import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Nav></Nav>
        <main>
          <About></About>
        </main>
      </div>
    </ChakraProvider>
  );
}

export default App;
