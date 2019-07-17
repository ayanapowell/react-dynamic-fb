import React from "react";
import styled from "@emotion/styled";
import { v4 } from "uuid";
import UserCard from "../components/UserCard";
import { PropTypes } from "prop-types";

const UsersEl = styled.div`
  h1 {
    margin-bottom: 50px;
    padding-left: 80px;
  }
`;

function Users(props) {
  return (
    <div>
      <UsersEl>
        <h1>All users:</h1>
        {props.userList.map(user => (
          <UserCard
            username={user.username}
            name={user.name}
            tagline={user.tagline}
            following={user.following}
            key={v4()}
            onAddNewFriend={props.onAddNewFriend}
          />
        ))}
      </UsersEl>
    </div>
  );
}

Users.propTypes = {
  userList: PropTypes.array
};

export default Users;
