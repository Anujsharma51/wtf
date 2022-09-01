import React, { useState } from "react";

import styled from "styled-components";

const Search = styled.div`
  width: 80%;
  margin: auto;
  .main {
    display: flex;
    margin-top: 15px;
    border: 1.4px solid white;
    padding: 10px;
    border-radius: 10px;
    margin-top: 50px;
  }
  .input {
    background-color: black;
    width: 80%;
    outline-width: 0;

    border: none;
    font-size: 18px;
    color: white;
  }
`;

const Searchbox = () => {
  const [inp, Setinput] = useState("");

  return (
    <>
      <Search>
        <form>
          <div className="main">
            <input
              className="input"
              value={inp}
              onChange={(e) => Setinput(e.target.value)}
              placeholder="Search gym name here.."
            />
          </div>
        </form>
      </Search>
    </>
  );
};

export default Searchbox;
