import React, { useState } from "react";
import styled from "styled-components";

const Rightpart = styled.div`
  margin-top: 50px;
  margin-left: 20px;
  overflow-y: scroll;
  width: 70%;
`;
const RightSection = () => {
  const [data, setData] = useState([]);
  const [gym, setgym] = useState([]);
  return (
    <>
      <Rightpart>
        {data.length === 0
          ? gym.map((elem, index) => {
              return "";
            })
          : ""}
      </Rightpart>
    </>
  );
};

export default RightSection;
