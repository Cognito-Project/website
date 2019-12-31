import { Box, Text, Flex, Image, Heading, Button } from "rebass";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#courses", label: "Courses" }
];

const VertAlign = ({ children }) => (
  <Flex flexDirection="column" justifyContent="center">
    {children}
  </Flex>
);

const NavList = props => {
  const links = props.links;
  const linkList = links.map(link => (
    <Link key={link.label} href={link.href}>
      <Button m={1} bg="transparent" color="#c9c7ff">
        {link.label}
      </Button>
    </Link>
  ));
  return (
    <Box direction="row-responsive" wrap="true" pad="small">
      {linkList}
    </Box>
  );
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
  async updateState() {
    if (netlifyIdentity.gotrue.currentUser() === null) {
      await this.setState({ isLoggedIn: false });
    } else {
      await this.setState({ isLoggedIn: true });
    }
  }
  async componentDidMount() {
    await this.updateState();
  }
  render() {
    return (
      <Flex p={1} flexDirection={["column", "row"]}>
        <Box width={[1, 1 / 2]}>
          <Flex alignContent="center">
            <Image
              alt="The Cognito Project Logo"
              src={require("../public/logoNoText.png")}
              sx={{ width: ["25%", "10%"], height: ["25%", "10%"] }}
            />
            <Link href="/">
              <Heading ml={2} my="auto" fontSize={[4, 5]}>
                The Cognito Project
              </Heading>
            </Link>
          </Flex>
        </Box>
        <Box width={[1, 1 / 2]} my="auto">
          <Flex
            justifyContent={["center", "flex-end"]}
            verticalAlign="bottom"
            mr={[0, 3]}
          >
            <NavList links={links} />

            {this.state.isLoggedIn ? (
              <Link href="/login">
                <Button m={1} bg="transparent" color="#c9c7ff">
                  Account
                </Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button m={1} bg="transparent" color="#c9c7ff">
                  Login
                </Button>
              </Link>
            )}
          </Flex>
        </Box>
      </Flex>
    );
  }
}

export default Header;
