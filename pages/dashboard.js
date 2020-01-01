import React from "react";
import ReactDOM from "react-dom";
import { Button, Text, Flex, Box } from "rebass";
import Layout from "../components/layout";
import CourseBox from "../components/dashboard/courseBox";
import Course from "../components/dashboard/course";

const greetings = ["Hey", "Hi", "Howdy", "Welcome"];
const punctuation = [".", "!"];

const courses = [
  {
    name: "Introduction to Security",
    description: "Learn the basics of security"
  },
  { name: "Java", description: "Learn Java" },
  { name: "Python", description: "Learn python" },
  { name: "Golang", description: "Learn golang" }
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
        {this.state.isLoggedIn ===false ? <meta http-equiv="Refresh" content="0; url=/login" />: null}
        <Flex flexDirection={["column", "row"]}>
          <Box p={1} mx={3}>
            <Text fontSize={[2, 3, 4]}>
              <u>Courses:</u>
            </Text>
            {courses.map(course => (
              <Box
                onClick={() => this.courseSelect(course.name)}
                key={course.name}
              >
                <CourseBox selected={true} name={course.name} />
              </Box>
            ))}
          </Box>
          <Box mx={3} p={1}>
            {this.state.activeCourse === null ? (
              <Text>Choose a course to get started!</Text>
            ) : null}
            {this.state.activeCourse === "Introduction to Security" ? (
              <Course
                name={"Introduction to Security"}
                description={"Learn the basics of security"}
              />
            ) : null}
            {this.state.activeCourse === "Java" ? (
              <Course name={"Java"} description={"Learn java"} />
            ) : null}
            {this.state.activeCourse === "Python" ? (
              <Course name={"Python"} description={"Learn python"} />
            ) : null}
            {this.state.activeCourse === "Golang" ? (
              <Course name={"Golang"} description={"Learn golang"} />
            ) : null}
          </Box>
        </Flex>
      </Layout>
    );
  }
}

export default Dashboard;
