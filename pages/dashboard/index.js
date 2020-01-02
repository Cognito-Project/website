import React from "react";
import ReactDOM from "react-dom";
import { Button, Text, Flex, Box, Heading } from "rebass";
import Layout from "../../components/layout";
import CourseCard from "../../components/dashboard/courseCard";

const greetings = ["Hey", "Hi", "Howdy", "Welcome"];
const punctuation = [".", "!"];

const courses = [
  {
    name: "Introduction to Security",
    description: "Learn the basics of security"
  },
  { name: "Java", description: "Learn Java" },
  { name: "Programming in Python", description: "Learn python" },
  { name: "The Basics of Golang", description: "Learn golang" }
];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: null,
      name: null,
      greeting: null,
      currentCourse: null,
      activeCourse: null
    };
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
      await this.updateGreeting();
    }
  }
  updateGreeting() {
    let greeter = greetings[Math.floor(Math.random() * greetings.length)];
    let punc = punctuation[Math.floor(Math.random() * punctuation.length)];
    this.setState({ greeting: greeter + " " + this.state.name + punc });
  }

  async componentDidMount() {
    await this.updateState();
  }

  courseSelect = course => {
    this.setState({ activeCourse: course });
  };

  render() {
    return (
      <Layout name={this.state.greeting} left={null}>
        {this.state.isLoggedIn === false ? (
          <meta http-equiv="Refresh" content="0; url=/login" />
        ) : null}
        <Box p={1} m={2}>
          <Heading>Learning Dashboard</Heading>
          <Box
            sx={{
              display: "grid",
              gridGap: 3,
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
            }}
          >
            {courses.map(course => (
              <CourseCard
                course
                completion={10}
                title={course.name}
                desc={course.description}
                progress={0}
              />
            ))}
          </Box>
        </Box>
      </Layout>
    );
  }
}

export default Dashboard;
