import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

export const Navbar = ({ setShow, setShowReg }) => {
  return (
    <Main>
      <Left>
        <div>Student Management System</div>
      </Left>
      <Right>
        <div className="btn">
          <Button
            onClick={() => setShow((e) => !e)}
            variant="contained"
            color="success"
          >
            Login
          </Button>
          <Button
            onClick={() => setShowReg((e) => !e)}
            variant="contained"
            color="success"
          >
            SignUp
          </Button>
        </div>
      </Right>
    </Main>
  );
};

const Main = styled.div`
  height: 60px;
  background-color: rgb(23, 21, 68);
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  color: #fef5ed;
  font-size: 25px;
  line-height: 60px;
  position: fixed;
  width: 100%;
  box-shadow: 0px 0px 10px 2px #bbbaba;
  top: 0;
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
