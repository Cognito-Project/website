import { Text, Box, Button } from "rebass";

const button = () => (
  <Button
    sx={{ borderRadius: 5 }}
    bg="#c9c7ff"
    color="black"
    onClick={() => netlifyIdentity.open("signup")}
  >
    <Text overflow fontSize={[4, 5]}>Register for the beta</Text>
  </Button>
);

export default button;
