import React, { Children } from "react";
import { Box, Flex, Image, Text } from "rebass";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Link from "next/link";
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";
import Landing from "./landing";
import Footer from "./footer";
import Header from "./header";
import Waves from "./waves";
import ThemeSwitch from "react-theme-switch";

const Home = ({
  children,
  landing = false,
  login = false,
  name = null,
  left = null
}) => (
  <React.Fragment>
    <NextSeo
      title="The Cognito Project"
      description="The Cognito Project is a online platform that teaches students security & programming through project based learning."
    />
    <ThemeProvider theme={theme}>
      <Head>
        <title>The Cognito Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box bg="#212121" color="white">
        <Flex
          sx={{
            flexDirection: "column",
            minHeight: "100vh"
          }}
        >
          <Box
            bg="#710b04"
            mb={-1}
            sx={{
              position: "-webkit-sticky",
              position: "sticky",
              top: 0,
              zIndex: 1
            }}
          >
            <Header />
          </Box>

          {landing ? <Landing /> : null}
          {name != null ? (
            <Flex px={5} bg="#710b04" justifyContent="flex-end">
              <Text fontSize={[3, 4, 5]}>{name}</Text>
            </Flex>
          ) : null}
          {login || name != null ? <Waves top /> : null}
          <Flex
            sx={{
              flex: 1,
              flexDirection: ["column", "row"]
            }}
          >
            <Box
              sx={{
                flex: 1,
                minWidth: 0
              }}
            >
              <Box
                bg="#212121"
                color="white"
                width={[1, 3 / 4]}
                sx={{
                  mx: "auto"
                }}
              >
                {children}
              </Box>
            </Box>

            <Box
              sx={{
                flexBasis: ["auto", 64],
                order: -1
              }}
            >
              {left}
            </Box>
            {/*<Box
              sx={{
                flexBasis: ["auto", 64]
              }}
            >
              right
              </Box>*/}
          </Flex>

          <Footer />
        </Flex>
      </Box>
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
      `}</style>
    </ThemeProvider>
  </React.Fragment>
);

export default Home;
