import React from "react";
import Header from "../components/Header";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import FriendProfile from "./FriendProfile";
import Users from "./Users";

const allUsers = [
  {
    username: "ayanapowell",
    name: "Ayana Powell",
    tagline: "Life is short"
  },
  {
    username: "kassalaholdsclaw",
    name: "Kassala Holdsclaw",
    tagline: "Living easy"
  },
  {
    username: "blackrabbit",
    name: "Colby Hayden",
    tagline: "Mobile bar company"
  },
  {
    username: "kachoo",
    name: "Tina Kachoo",
    tagline: "Poet things"
  },
  {
    username: "mamasan",
    name: "Mayumi Powell",
    tagline: "Konnichiwa"
  },
  {
    username: "jamalp",
    name: "Jamal Powell",
    tagline: "Aloha, friends"
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/friend-profile" component={FriendProfile} />
          <Route
            path="/all-users"
            render={() => <Users userList={allUsers} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
