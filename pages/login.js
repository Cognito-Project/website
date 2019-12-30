import React from "react";
import ReactDOM from "react-dom";
import { Button, Text, Flex } from "rebass";
import Layout from "../components/layout";

class App extends React.Component {
  componentDidMount() {
    netlifyIdentity.open();
  }
  render() {
    return (
      <Layout login>
        <Flex m={5} justifyContent="center" alignItems="center">
          <Button
            bg="#c9c7ff"
            color="black"
            onClick={() => netlifyIdentity.open()}
          >
            <Text fontSize={[3, 4, 5]}> Click here to login!</Text>
          </Button>
        </Flex>
      </Layout>
    );
  }
}
//ReactDOM.render(<App />, document.getElementById('root'));
export default App;
