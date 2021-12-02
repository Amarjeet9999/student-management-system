import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

export const Navbar = () => {
  return (
    <Main>
      <Left>
        <div>Student Management System</div>
      </Left>
      <Right>
        <div className="btn">
          <Button variant="contained" color="success">
            Login
          </Button>
          <Button variant="contained" color="success">
            SignUp
          </Button>
        </div>
      </Right>
    </Main>
  );
};

const Main = styled.div`
  height: 60px;
  background-color: #2e2d2d;
  display: flex;
  justify-content: space-between;
  color: #fef5ed;
  font-size: 25px;
  line-height: 60px;
`;

const Left = styled.div`
  width: 50%;
  & div {
    margin-left: 10px;
    cursor: pointer;
    font-weight: 600;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 20px;

  & .btn {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }

  & Button {
    width: 130px;
    height: 40px;
  }
`;
