import { Card, Text, Heading, Box, Button } from "rebass";
import ProgressBar from "../progressBar";

const CourseCard = ({
  title = null,
  desc = null,
  course = false,
  progress = 0
}) => (
  <Card
    //width={[1, 250, 500]}
    p={3}
    m={2}
    bg="#121212"
    sx={{ borderRadius: 10 }}
  >
    {progress != 0 && course ? <ProgressBar progress={progress} /> : null}
    <Heading fontSize={[1, 2, 3]}>{title}</Heading>
    <Text fontSize={[1, 2, 3]} my={1}>
      {desc}
    </Text>
    {progress === 0 && course ? (
      <Button mt={1} bg="#AF0404" sx={{ boxShadow: "0 0 5px darkred" }}>
        Start Course
      </Button>
    ) : null}
    {progress != 0 && course ? (
      <Button  mt={1}  bg="#4F04AF" sx={{ boxShadow: "0 0 5px purple" }}>
        Continue Course
      </Button>
    ) : null}
  </Card>
);

export default CourseCard;
