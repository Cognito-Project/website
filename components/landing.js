import React from "react";
import Link from "next/link";
import { Box, Image, Heading, Text, Button, Flex } from "rebass";
import Waves from "./waves";
import RegisterButton from "./registerButton";

const Nav = () => (
  <Box>
    <Box
      width={1}
      height={[200, 300]}
      bg="#3D0606"
      verticalAlign="center"
      p={[3, 5]}
      my={-1}
    >
      <Flex
      mx="auto"
        alignContent="center"
        justifyContent="center"
        flexDirection="column"
        width={[1,400,800]}
      >
        <Heading fontSize={[4, 5, 6]} textAlign="center" color="white">
          Your journey into security and programming starts here.
        </Heading>

        <Box
          mt={4}
          flexDirection="row"
          alignSelf="center"
          alignContent="center"
        >
          <RegisterButton />
        </Box>
      </Flex>
    </Box>
    <Waves top />
  </Box>
);

export default Nav;
