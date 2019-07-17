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
    tagline: "Life is short",
    following: false
  },
  {
    username: "kassalaholdsclaw",
    name: "Kassala Holdsclaw",
    tagline: "Living easy",
    following: false
  },
  {
    username: "blackrabbit",
    name: "Colby Hayden",
    tagline: "Mobile bar company",
    following: false
  },
  {
    username: "kachoo",
    name: "Tina Kachoo",
    tagline: "Poet things",
    following: false
  },
  {
    username: "mamasan",
    name: "Mayumi Powell",
    tagline: "Konnichiwa",
    following: false
  },
  {
    username: "jamalp",
    name: "Jamal Powell",
    tagline: "Aloha, friends",
    following: true
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList: []
    };
    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.handleDeleteFriend = this.handleAddFriend.bind(this);
  }
  handleAddFriend(newFriend) {
    const newFriendsList = this.state.friendsList.slice();
    if (newFriend.following) {
      newFriendsList.push(newFriend);
    }
    this.setState({ friendsList: newFriendsList });
  }
  handleDeleteFriend() {
    // const newFriendsList = this.state.friendsList.slice();
    console.log(this.state.friendsList);
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Dashboard allUsers={this.state.friendsList} />}
          />
          <Route path="/friend-profile" component={FriendProfile} />
          <Route
            path="/all-users"
            render={() => (
              <Users
                userList={allUsers}
                onAddNewFriend={this.handleAddFriend}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
