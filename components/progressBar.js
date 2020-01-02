import { Box, Text } from "rebass";
const ProgressBar = ({ progress }) => (
  <Box>
    <Text mb={1} textAlign="center">
      {progress}% Completed
    </Text>
    <Box bg="#282828" sx={{ borderRadius: 5 }} width={1} height={30}>
      <Box
        bg="#464646"
        sx={{ borderRadius: 5 }}
        width={progress + "%"}
        height={30}
      ></Box>
    </Box>
  </Box>
);

export default ProgressBar;
