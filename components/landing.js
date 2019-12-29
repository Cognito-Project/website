import React from "react";
import Link from "next/link";
import { Box, Image, Heading, Text, Button, Flex } from "rebass";
import Typing from "react-typing-animation";
import styled from "styled-components";
import Waves from "./waves";
import RegisterButton from "./registerButton";

const TitleFont = styled.div`
  font-size: 2.3em;
`;
const verbs = ["Learn", "Create", "Innovate"];

const Nav = () => (
  <Box>
    <Box
      width={1}
      height={[200, 300]}
      bg="#710b04"
      verticalAlign="center"
      p={[3,5]}
      pb={-1}
    >
      <Flex
        alignContent="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Heading fontSize={[4, 5, 6]} textAlign="center" color="white">
          Your journey into security and programming starts here.
        </Heading>

        {/* <Box flexDirection="row" alignSelf="center" justifyContent="center">
            <Flex>
              <Typing loop>
                {verbs.map(verb => (
                  <>
                    <span style={{ fontSize: "2.3em" }}>{verb}</span>
                    <Typing.Delay ms={1300} />
                    <Typing.Backspace count={verb.length + 1} />
                  </>
                ))}
              </Typing>
              <TitleFont>with us.</TitleFont>
                </Flex>
          </Box>*/}
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
    <Waves top={true} />
  </Box>
);

export default Nav;
