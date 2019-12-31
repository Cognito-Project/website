import React from "react";
import ReactDOM from "react-dom";
import { Button, Text, Flex, Box } from "rebass";
import Layout from "../components/layout";

const greetings = ["Hey", "Hi", "Howdy", "Welcome"];
const punctuation = [".", "!"];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, name: null, greeting: null };
  }
  async updateState() {
    if (netlifyIdentity.gotrue.currentUser() === null) {
      await this.setState({ isLoggedIn: false });
      netlifyIdentity.open();
    } else {
      await this.setState({ isLoggedIn: true });
      netlifyIdentity.close();
      await this.setState({
        name: netlifyIdentity.gotrue.currentUser().user_metadata.full_name
      });
      await this.updateGreeting();
    }
  }
  updateGreeting() {
    let greeter = greetings[Math.floor(Math.random() * greetings.length)];
    let punc = punctuation[Math.floor(Math.random() * punctuation.length)];
    this.setState({ greeting: greeter + " " + this.state.name + punc });
    console.log(this.state.greeting);
  }

  async componentDidMount() {
    await this.updateState();
  }
  render() {
    return (
      <Layout name={this.state.greeting} left={<Box>Courses</Box>}>
        Course content here
      </Layout>
    );
  }
}

export default Dashboard;
