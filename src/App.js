import React, { Component } from "react";
import SingleComment from "./components/SingleComment";
import UserCard from "./components/UserCard";
import "./App.css";
import profileImage1 from "./images/user-images/profile-1.jpg";
import profileImage2 from "./images/user-images/profile-2.jpg";
import profileImage3 from "./images/user-images/profile-3.jpg";

class App extends Component {
  state = {
    blackText: "black",
  };

  render() {
    return (
      <div className="container">
        <div className="ui comments">
          <UserCard>
            <SingleComment
              name="Alex"
              image={profileImage1}
              date="Today at 6:00"
              comment="Yes sir!"
            />
          </UserCard>
          <UserCard>
            <SingleComment
              name="Sarah"
              image={profileImage2}
              date="Today at 5:00"
              comment="Its amazing"
            />
          </UserCard>
          <UserCard>
            <SingleComment
              name="Katakulli"
              image={profileImage3}
              date="Today at 7:00"
              comment="Hello bruh"
            />
          </UserCard>
          <UserCard>Hi! I'm Osman, I live in Istanbul</UserCard>
        </div>
      </div>
    );
  }
}

export default App;
