import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div className="about">
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        {/* <User
          name="Subhan De"
          location="Jhargram"
          contact="desubhan123@gmail.com"
        /> */}
        <UserClass
          name="Subhan De"
          location="Jhargram"
          contact="desubhan123@gmail.com"
        />
        {/* <UserClass
          name="De Subh"
          location="Jhargram"
          contact="desubhan123@gmail.com"
        /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about">
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       <User name="Subhan De" location="Jhargram" contact="desubhan123@gmail.com"/>
//       <UserClass name="Subhan De" location="Jhargram" contact="desubhan123@gmail.com"/>
//     </div>
//   );
// };

export default About;
