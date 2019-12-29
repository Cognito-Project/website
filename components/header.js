import { Box, Text, Flex, Image, Heading, Button } from "rebass";

const links = [
  { href: "/", label: "Home" },

  { href: "/about", label: "About" },
  { href: "/login", label: "Login" }
];

const VertAlign = ({ children }) => (
  <Flex flexDirection="column" justifyContent="center">
    {children}
  </Flex>
);

const NavList = props => {
  const links = props.links;
  const linkList = links.map(link => (
    <Button href={link.href} m={1} bg="transparent">
      <Text color="#c9c7ff" mx="small">
        {link.label}
      </Text>
    </Button>
  ));
  return (
    <Box direction="row-responsive" wrap="true" pad="small">
      {linkList}
    </Box>
  );
};

const header = () => (
  <Flex p={1}>
    <Box width={[1, 1 / 2]}>
      <Flex alignContent="center">
        <Image
          src={require("../public/logoNoText.png")}
          sx={{ width: ["45%", "10%"], height: ["45%", "10%"] }}
        />

        <Heading my="auto" fontSize={[3, 4, 5]}>
          The Cognito Project
        </Heading>
      </Flex>
    </Box>
    <Box width={[1, 1 / 2]} my="auto">
      <Flex justifyContent="flex-end" verticalAlign="bottom">
        <NavList links={links} />
      </Flex>
    </Box>
  </Flex>
);

export default header;
