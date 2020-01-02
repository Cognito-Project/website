import { Text, Box, Button } from "rebass";
import Link from "next/link";

const button = () => (
  <Link href="/login">
    <Button
      sx={{ borderRadius: 5 }}
      bg="#AF0404"
      sx={{ boxShadow: "0 0 5px red" }}
    >
      <Text fontSize={[4, 5]}>Register for the beta</Text>
    </Button>
  </Link>
);

export default button;
