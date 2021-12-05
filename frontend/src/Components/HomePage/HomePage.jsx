import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

export const HomePage = () => {
  return (
    <Main>
      <CardDiv>
        <Card>
          <img src="https://freesvg.org/img/administrator.png" alt="" />
          <Button variant="contained" color="success">
            Admin
          </Button>
        </Card>
        <Card>
          <img src="https://freesvg.org/img/happy.png" alt="" />
          <Button variant="contained" color="success">
            Student
          </Button>
        </Card>
      </CardDiv>
    </Main>
  );
};

const Main = styled.div`
  background-color: rgb(46, 48, 53);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardDiv = styled.div`
  height: 400px;
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Card = styled.div`
  height: 300px;
  width: 300px;
  border: none;
  cursor: pointer;
  background-color: rgb(71, 74, 81);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

  &:hover {
    transform: scale(1.02);
  }

  & img {
    max-height: 60%;
    max-width: 60%;
  }

  & Button {
    color: #fef5ed;
    width: 130px;
    height: 40px;
  }
`;
