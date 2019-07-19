import React from "react";
import styled from "@emotion/styled";

const UserCardEl = styled.div`
  border-bottom: 1px solid #ccc;
  margin-bottom: 30px;
  width: 70%;
  margin: 0 auto 30px auto;
  p {
    margin-bottom: 0;
  }
  span {
    font-size: 12px;
    padding-left: 5px;
    color: #6d6f73;
  }
  .tagline {
    font-style: italic;
    font-size: 12px;
    color: #6d6f73;
  }
  .links {
    display: flex;
    font-size: 12px;
    color: #34579e;
    margin-top: 20px;
    li:first-of-type {
      margin-right: 15px;
      cursor: pointer;
    }
  }
`;

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      following: false
    };
    this.handleToggleFriend = this.handleToggleFriend.bind(this);
  }
  handleToggleFriend(event) {
    event.preventDefault();

    if (!this.state.following) {
      this.props.onAddNewFriend({
        username: this.props.username,
        name: this.props.name,
        tagline: this.props.tagline,
        following: !this.props.following
      });
      this.setState({ following: false });
    } else {
      this.props.onRemoveFriend({
        username: this.props.username,
        name: this.props.name,
        tagline: this.props.tagline,
        following: false
      });
    }
  }
  render() {
    return (
      <div>
        <UserCardEl>
          <p className="username">
            <strong>{this.props.username}</strong>
            <span className="name">{this.props.name}</span>
          </p>

          <p className="tagline">{this.props.tagline}</p>
          <ul className="list-unstyled links">
            <li onClick={this.handleToggleFriend}>
              {this.state.following ? "Unfollow" : "Follow"}
            </li>
          </ul>
        </UserCardEl>
      </div>
    );
  }
}

export default UserCard;
