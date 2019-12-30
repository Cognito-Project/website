import React from "react";
import { Box, Flex, Text, Heading, Card, Button } from "rebass";
import Layout from "../components/layout";
import Link from "next/link";
import ContentCard from "../components/ContentCard";
import RegisterButton from "../components/registerButton";
import ScrollableAnchor from 'react-scrollable-anchor'

const info = [
  {
    Title: "Learn",
    Body:
      "Learn from a curriculum that is curated from the best books, online tutorials, and courses. Taught by students, for students."
  },
  {
    Title: "Create",
    Body:
      "Build dozens of projects throughout your learning. Everything from small scripts, to full on web applications. Learn by doing."
  },
  {
    Title: "Innovate",
    Body:
      "You will learn relevant material that is applicable across disciplines. Our teaching methods ensure you retain the information you learn."
  }
];

const courses = ["Intro to Cybersecurity", "Java", "Python", "Golang"];

const Home = () => (
  <Layout landing>
    <ScrollableAnchor id={'about'}>
    <Text fontSize={[3, 4, 5]} textAlign="center" my={5}>
      The Cognito Project is a online platform that teaches students security &
      programming through project based learning.
    </Text></ScrollableAnchor>
    <Flex justifyContent="center" flexWrap="wrap">
      {info.map(i => (
        <ContentCard title={i.Title}>{i.Body}</ContentCard>
      ))}
    </Flex><ScrollableAnchor id={'courses'}>
    <Heading fontSize={[3, 4, 5]} textAlign="center" marginTop={5}>
      We currently offer courses in:
    </Heading>
    </ScrollableAnchor>
    <Flex justifyContent="center" flexWrap="wrap">
      {courses.map(course => (
        <Card
          sx={{ borderRadius: 12 }}
          bg="grey"
          color="snow"
          m={3}
          padding={10}
        >
          <Heading>{course}</Heading>
        </Card>
      ))}
    </Flex>
    <Flex m={5} p={5} justifyContent="center" alignContent="center">
   
      <RegisterButton />
    </Flex>
  </Layout>
);

export default Home;
