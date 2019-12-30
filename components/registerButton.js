import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-red.css";
import { Text, Box, Button } from "rebass";

const button = () => (
  <AwesomeButton type="primary" onPress={()=>netlifyIdentity.open('signup')}>
    <Text color="snow" fontSize={[3, 4, 5]}>Register for the beta</Text>
  </AwesomeButton>
);

export default button;
