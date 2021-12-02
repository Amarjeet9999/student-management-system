import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <>
      <Main>
        <div className="flex">
          <span>© 2021 Amarjeet, Inc</span>
          <span>About</span>
          <span>Emerald</span>
          <span>Press</span>
          <span>Blog</span>
          <span>Privacy</span>
          <span>CCPA</span>
          <span>Advertise</span>
          <span>Ad Choices</span>
          <span>Rules</span>
          <span>Help</span>
          <span>...</span>
          <span>Get the App</span>
        </div>
      </Main>
    </>
  );
};

const Main = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 100;
  width: 100%;
  background-color: rgb(51, 53, 59);

  & .flex {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  & .flex span {
    cursor: pointer;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fef5ed;
    margin-left: 20px;
    padding: 15px;
  }
`;
