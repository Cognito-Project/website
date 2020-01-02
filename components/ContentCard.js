import { Card, Text, Heading, Box, Button } from "rebass";

const ContentCard = ({ title = null, desc = null }) => (
  <Card width={300} p={3} m={2} bg="#121212" sx={{ borderRadius: 10 }}>
    <Heading textAlign="center" fontSize={[3, 4, 5]}>
      {title}
    </Heading>
    <Text fontSize={[2, 3, 4]} p={1}>
      {desc}
    </Text>
  </Card>
);

export default ContentCard;
