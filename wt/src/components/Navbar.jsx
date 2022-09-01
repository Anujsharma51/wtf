import React from "react";

import styled from "styled-components";

import { Button } from "@chakra-ui/react";
const Navbar = () => {
  const Nav = styled.div`
    display: flex;
    background-color: black;
    align-items: center;
    width: 100%;
    height: 50px;
    top: 0;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-around;
    color: white;
    position: fixed;
    z-index: 5;

    .btn {
      color: white;
      background-color: #920909;
    }

    .link {
      font-size: 20px;

      list-style: none;
      text-decoration: none;
    }
    .link:hover {
      color: red;
    }
  `;

  return (
    <>
      <Nav>
        <li className="link">Fitness</li>
        <li className="link">Nutrition</li>
        <li className="link">Gyms</li>

        <li className="link">Become Partner</li>

        <li className="link">About us</li>

        <li className="link">
          <Button className="btn">Login</Button>
        </li>
      </Nav>
    </>
  );
};

export default Navbar;
