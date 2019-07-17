import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const HeaderEl = styled.div`
  padding: 15px 0 0 0;
  border-bottom: 1px solid #ccc;
  margin-bottom: 30px;
  ul {
    display: flex;
    align-items: center;
    li {
      padding: 0 15px;
    }
  }
  p {
    margin: 0;
  }
`;

function Header() {
  return (
    <div>
      <HeaderEl className="">
        <ul className="list-unstyled">
          <li>
            <Link to="/">
              <h1>
                <strong>JUNO</strong>
              </h1>
            </Link>
          </li>
          <li>
            <Link to="/all-users">
              <p>Users</p>
            </Link>
          </li>
        </ul>
      </HeaderEl>
    </div>
  );
}

export default Header;
