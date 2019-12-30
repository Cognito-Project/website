import React from "react";
import Link from "next/link";
import { Box, Image, Heading, Text, Button, Flex } from "rebass";
import Typing from "react-typing-animation";
import styled from "styled-components";
import Waves from "./waves";
import RegisterButton from "./registerButton";

const Nav = () => (
  <Box>
    <Box
      width={1}
      height={[200, 300]}
      bg="#710b04"
      verticalAlign="center"
      p={[3, 5]}
      my={-1}
    >
      <Flex
        alignContent="center"
        justifyContent="center"
        flexDirection="column"
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
