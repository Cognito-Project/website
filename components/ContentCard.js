import { Card, Text, Heading } from "rebass";

const ContentCard = ({title,children }) => (
  <Card width={400} p={3} m={3} bg="grey" color="snow" sx={{borderRadius:12}}>
    <Heading textAlign="center" fontSize={[ 3, 4, 5 ]} fontWeight="bold">{title}</Heading>
    <Text fontSize={[ 2, 3, 4 ]} p={1}>{children}</Text>
  </Card>
);

export default ContentCard;
