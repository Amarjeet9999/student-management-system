import React from "react";
import styled from "styled-components";
import { Form } from "./Form";

export const Login = ({ setShow }) => {
  return (
    <Main>
      <MainRegister>
        <div className="first">
          <div className="mainFirst">
            <div className="second_form">
              <Form setShow={setShow} />
            </div>
          </div>
        </div>
      </MainRegister>
    </Main>
  );
};

const Main = styled.div`
  z-index: 999;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const MainRegister = styled.div`
  background-color: #857f7f;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 500px;
  z-index: 100;
  width: 850px;

  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

  margin: auto;
  & .first {
    flex-direction: column;
  }
  & .mainFirst {
    display: flex;
  }

  & .second_form {
    width: 100%;
    border-radius: 5px;
  }
  & .btn-close {
    float: right;
    margin-right: 10px;
    margin-top: 10px;
    height: 20px;
    cursor: pointer;
    width: 20px;
  }
`;
