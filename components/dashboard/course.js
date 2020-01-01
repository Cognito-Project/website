import { Box, Text, Heading } from "rebass";

const course = ({ name = null, description = null, playlist }) => {
  return (
    <Box>
      <Heading>{name}</Heading>
      <Text>{description}</Text>
    </Box>
  );
};

export default course
