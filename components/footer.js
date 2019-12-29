import { Box, Text, Flex, Image, Heading } from "rebass";
import Waves from "./waves";
const footer = () => (
  <Box>
    <Waves />
    <Box  bg="#710b04" mt={-1} p={3}>
    <Flex alignContent="center">
        <Image
          src={require("../public/logoNoText.png")}
          sx={{ width: ["15%", "5%"], height: ["15%", "5%"] }}
        />

        <Heading my="auto" fontSize={[3, 4, 5]}>
          The Cognito Project
        </Heading>
      </Flex>
    </Box>
  </Box>
);

export default footer;
