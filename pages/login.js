import React from "react";
import { Button, Text, Flex, Box } from "rebass";
import Layout from "../components/layout";
import Link from "next/link";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, name: null };
  }

  async updateState() {
    if (netlifyIdentity.gotrue.currentUser() === null) {
      await this.setState({ isLoggedIn: false });
    } else {
      await this.setState({ isLoggedIn: true });
      netlifyIdentity.close();
      await this.setState({
        name: netlifyIdentity.gotrue.currentUser().user_metadata.full_name
      });
    }
  }

  async logOut() {
    await netlifyIdentity.logout();
    this.updateState();
  }

  async componentDidMount() {
    await this.updateState();
    netlifyIdentity.on("close", () => this.updateState());
    
  }

  render() {
    return (
      <Layout login>
        <Flex m={2} justifyContent="center" alignItems="center">
          {this.state.isLoggedIn ? (
            <Box>
              <Text fontSize={[4, 5, 6]}> Hello {this.state.name}!</Text>
              <Text fontSize={[3, 4, 5]}> You are logged in.</Text>
              <Link href="/dashboard">
                <Text py={4} fontSize={[3, 4, 5]}>
                  Click here to head to the <u>learning dashboard</u>
                </Text>
              </Link>
              <Button bg="#c9c7ff" color="black" onClick={() => this.logOut()}>
                <Text fontSize={[2, 3, 4]}>Log out</Text>
              </Button>
            </Box>
          ) : (
            <Button
              bg="#c9c7ff"
              color="black"
              onClick={() => netlifyIdentity.open()}
            >
              <Text fontSize={[3, 4, 5]}> Click here to login!</Text>
            </Button>
          )}
        </Flex>
      </Layout>
    );
  }
}
//ReactDOM.render(<App />, document.getElementById('root'));
export default App;
