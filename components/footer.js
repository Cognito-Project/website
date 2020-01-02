import { Box, Text, Flex, Image, Heading } from "rebass";
import { FaDiscord, FaTwitter, FaGithub, FaProductHunt } from "react-icons/fa";
import Waves from "./waves";
const links = [
  { component: <FaDiscord size="2em" />, alt: "Discord" },
  { component: <FaGithub size="2em" />, alt: "Github" },
  { component: <FaTwitter size="2em" />, alt: "Twitter" },
  { component: <FaProductHunt size="2em" />, alt: "Product Hunt" }
];
const footer = () => (
  <Box>
    <Waves />
    <Box bg="#121212" mt={-1} p={3}>
      <Flex alignContent="center" p={1}>
        <Flex mx="auto">
        {links.map(icon => (
          <Box key={icon.alt} px={2}>
            {icon.component}
          </Box>
        ))}</Flex>
      </Flex>
    </Box>
  </Box>
);

export default footer;
