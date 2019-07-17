import React from "react";
import styled from "@emotion/styled";

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
  render() {
    return (
      <div>
        <DashboardEl>
          <div className="row">
            <div className="main-content col-sm-8">
              <div className="your-posts ">
                <strong>Your posts:</strong>
              </div>
            </div>

            <div className="sidebar col-sm-4">
              <div className="following border p-3">
                <strong>Following:</strong>
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
