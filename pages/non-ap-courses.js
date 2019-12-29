import React from "react";
import { Box, Text } from "grommet";
import Layout from "../components/layout";
import BigCard from "../components/bigCard";
import Link from "next/link";
import RegisterButton from "../components/registerButton";

const NonApCourses = () => (
  <Layout>
    <BigCard>
      <Box basis="1/2" margin="medium" padding="small">
        <Text size="xlarge">
          In addition to our <Link href="/">AP courses</Link>,
        </Text>
        <Text size="xlarge" >
         This year we are also offering:
        </Text>
        <Text size="xlarge" padding="medium">
          Discrete Math, Linear Algebra, and Calculus III
        </Text>
      </Box>
      <Box basis="1/2" margin="medium" padding="small">
        <RegisterButton />
      </Box>
    </BigCard>
  </Layout>
);

export default NonApCourses;
