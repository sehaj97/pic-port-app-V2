import { useEffect } from "react";

import { Box, Button } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);
  return (
    <header>
      <Flex>
        <Box>
          <h2>
            <a href="/">
              <span role="img" aria-label="camera">
                {" "}
                📸
              </span>{" "}
              Oh Snap!
            </a>
          </h2>
        </Box>
        <Spacer />
        <Box>
          <nav>
            <ul className="flex-row">
              <li className="mx-2">
                <a href="#about" data-testid="about">
                  <Button colorScheme="teal" variant="ghost">
                    About Me
                  </Button>
                </a>
              </li>
              {categories.map((category, index) => (
                <li key={`${currentCategory.name}-${index}`}>
                  <Button
                    onClick={(event) => {
                      event.preventDefault();
                      setCurrentCategory(category);
                    }}
                    href={`#${currentCategory.name}`}
                    colorScheme="teal"
                    variant={
                      currentCategory.name === category.name ? "solid" : "ghost"
                    }
                  >
                    {capitalizeFirstLetter(category.name)}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </Box>
      </Flex>
    </header>
  );
}

export default Nav;
