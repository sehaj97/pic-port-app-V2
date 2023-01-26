import { Box, Button } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
function Nav() {
  const categories = [
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];
  function categorySelected(name) {
    console.log(`${name} clicked`);
  }
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
                <a href="#about">
                  <Button colorScheme="teal" variant="ghost">
                    About Me
                  </Button>
                </a>
              </li>
              <li>
                <Button colorScheme="teal" variant="ghost">
                  Contact
                </Button>
              </li>
              {categories.map((category) => (
                <span onClick={() => categorySelected(category.name)}>
                  <Button
                    key={category.name}
                    colorScheme="teal"
                    variant="ghost"
                  >
                    {category.name}
                  </Button>
                </span>
              ))}
            </ul>
          </nav>
        </Box>
      </Flex>
    </header>
  );
}

export default Nav;
