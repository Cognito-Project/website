
import { Text, Box, Button } from "rebass";

const button = () => (
  <Button bg="#c9c7ff" color="black" onPress={()=>netlifyIdentity.open('signup')}>
    <Text fontSize={[3, 4, 5]}>Register for the beta</Text>
  </Button>
);

export default button;
