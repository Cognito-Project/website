import { Box, Text, Flex, Image, Heading } from "rebass";
import { FaDiscord, FaTwitter, FaGithub, FaProductHunt } from "react-icons/fa";
import Waves from "./waves";
const links = [
  <FaDiscord size="2em" />,
  <FaGithub size="2em" />,
  <FaTwitter size="2em" />,
  <FaProductHunt size="2em" />
];
const footer = () => (
  <Box>
    <Waves />
    <Box bg="#710b04" mt={-1} p={3}>
      <Flex alignContent="center" p={1} flexDirection={["column","row"]}>
        <Box width={[1, 1 / 2]}>
        <Flex alignContent="center" >
          <Image
            src={require("../public/logoNoText.png")}
            sx={{ width: ["25%", "10%"], height: ["25%", "10%"] }}
          />

          <Heading my="auto" fontSize={[4, 5]}>
            The Cognito Project
          </Heading>
          </Flex>
        </Box>
        <Box width={[1, 1 / 2]} my="auto">
          <Flex justifyContent={["center","flex-end"]} p={1}>
            {links.map(link=>(
              <Box px={2}>{link}</Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  </Box>
);

export default footer;
