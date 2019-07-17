import React from "react";
import { v4 } from "uuid";
import styled from "@emotion/styled";
import UserCard from "./UserCard";

const DashboardEl = styled.div`
  .following {
    margin-bottom: 30px;
  }
  .sidebar,
  .your-posts {
    background: #fafafa;
    padding: 30px;
  }
`;
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <DashboardEl>
          <div className="row">
            <div className="main-content col-sm-7">
              <div className="your-posts ">
                <strong>Your posts:</strong>
              </div>
            </div>

            <div className="sidebar col-sm-5">
              <div className="following border p-3">
                <strong>Following:</strong>
                {this.props.allUsers.map(user =>
                  user.following ? (
                    <UserCard
                      username={user.username}
                      name={user.name}
                      tagline={user.tagline}
                      key={v4()}
                    />
                  ) : (
                    ""
                  )
                )}
              </div>
              <div className="liked-posts p-3 border">
                <strong>Liked posts:</strong>
              </div>
            </div>
          </div>
        </DashboardEl>
      </div>
    );
  }
}

export default Dashboard;
