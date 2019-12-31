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
    <Box bg="#710b04" mt={-1} p={3}>
      <Flex alignContent="center" p={1} flexDirection={["column", "row"]}>
        <Box width={[1, 1 / 2]}>
          <Flex alignContent="center">
            <Image
              alt="The Cognito Project Logo"
              src={require("../public/logoNoText.png")}
              sx={{ width: ["25%", "10%"], height: ["25%", "10%"] }}
            />

            <Heading ml={2} my="auto" fontSize={[4, 5]}>
              The Cognito Project
            </Heading>
          </Flex>
        </Box>
        <Box width={[1, 1 / 2]} my="auto">
          <Flex justifyContent={["center", "flex-end"]} p={1}>
            {links.map(icon => (
              <Box key={icon.alt} px={2}>
                {icon.component}
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  </Box>
);

export default footer;
