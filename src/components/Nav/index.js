import { useEffect } from "react";

import { Box, Button } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav({
  categories,
  setCategories,
  setCurrentCategory,
  currentCategory,
}) {
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
              {categories.map((category) => (
                <li
                  key={currentCategory.name}
                  className={`mx-1 ${
                    currentCategory.name === category.name && "navActive"
                  }`}
                >
                  <a
                    onClick={() => {
                      setCurrentCategory(category);
                    }}
                  >
                    <Button colorScheme="teal" variant="ghost">
                      {capitalizeFirstLetter(category.name)}
                    </Button>
                  </a>
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
