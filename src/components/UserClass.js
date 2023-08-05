import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor: " + this.props.name);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        contact: "Dummy Email",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      },
    };
  }
  async componentDidMount() {
    const url = "https://api.github.com/users/akshaymarch7";
    const data = await fetch(url);
    const res = await data.json();
    console.log(res);
    this.setState({ userInfo: res });
    console.log("Child componentDidMount: " + this.props.name);
  }
  componentDidUpdate() {
    console.log("Child componentDidUpdate: " + this.props.name);
  }

  componentWillUnmount() {
    console.log("Child componentWillUnmount: " + this.props.name);
  }

  render() {
    console.log("Child Render: " + this.props.name);
    const { name, location, contact, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="user-card-img" src={avatar_url}></img>
        {/* <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count Increase
        </button> */}

        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
