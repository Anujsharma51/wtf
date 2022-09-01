import React from "react";
import { GoSearch } from "react-icons/go";

import styled from "styled-components";
const Search = styled.div`
  width: 60%;

  .main {
    display: flex;
    margin-top: 15px;

    padding: 10px;
    background-color: #2e2e2e;
    margin-bottom: 30px;
    border-radius: 5px;
  }
  .input {
    background-color: #2e2e2e;
    width: 80%;
    font-weight: 500;

    font-size: 18px;

    color: #a9a6a6;
  }

  .sear {
    color: #a9a6a6;
    margin-top: 10px;
    margin-right: 15px;
  }
  .location {
    font-size: 30px;
    padding: 4px;
    border-radius: 5px;
    background-color: #920909;
  }
  .btn {
    border-radius: 5px;
    background-color: #920909;
    padding: 0px 10px;
    font-size: 20px;
    margin-left: 10px;
    margin-bottom: 5px;
  }
`;
const LeftSide = styled.div`
  margin-top: 50px;
  width: 30%;

  .headinging {
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 25px;
    margin-left: -200px;
  }
  .min {
    border-radius: 5px;
    background-color: #2e2e2e;
    width: 20%;
    padding: 10px;
    font-weight: 500;
    border: none;
    font-size: 18px;
    outline-width: 0;
    color: #a9a6a6;
    border: 1.4px solid #a9a6a6;
    text-align: center;
  }
  .max {
    text-align: center;
    border-radius: 5px;

    background-color: #2e2e2e;
    width: 20%;
    padding: 10px;
    font-weight: 500;
    border: none;
    font-size: 18px;

    color: #a9a6a6;
    border: 1.4px solid #a9a6a6;
    margin-left: 10px;
  }
  .price {
    display: flex;
  }
  .select {
    border-radius: 2px;
    background-color: #2e2e2e;
    width: 70%;
    border: 1.4px solid #a9a6a6;
    padding: 12px 4.3px;
    margin-left: -100px;
  }

  .select {
    option {
      padding: 12px 5px;
    }
  }
`;

const LeftSection = () => {
  return (
    <>
      <LeftSide>
        <div>
          <h2>Filters</h2>
        </div>
        <div>
          <div>
            <h5 className="headinging">Location</h5>

            <Search>
              <div className="main">
                <GoSearch className="sear" />
                <input className="input" placeholder="Enter Location" />
              </div>
            </Search>
          </div>
        </div>
        <div>
          <h5 className="headinging">Price</h5>
          <div className="price">
            <input className="min" placeholder="Min" />
            <input className="max" placeholder="Max" />
          </div>
        </div>
        <div>
          <h5 className="headinging">Cities</h5>
          <select className="select">
            <option value="New Delhi">New Delhi</option>
            <option value="Ghaziabad">Ghaziabad</option>
            <option value="Greater Noida">Greater Noida</option>
            <option value="Noida">Noida</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
      </LeftSide>
    </>
  );
};

export default LeftSection;
