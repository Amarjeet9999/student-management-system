import React from "react";
import styled from "styled-components";
import axios from "axios";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";

export const Form = ({ setShowReg }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [client, setClient] = React.useState("");
  const [showErr, setShowErr] = React.useState();

  const handleRegister = async () => {
    try {
      if (client === "") return;
      await axios
        .post("http://localhost:5000/register", {
          name: name,
          email: email,
          password: password,
          roles: "admin",
        })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("user-st-m", JSON.stringify(res.data));
        });
    } catch (err) {
      console.log(err);
    }
    setEmail("");
    setPassword("");
    setClient("");
    setName("");
  };

  const setErr = () => {
    if (client === "student") setShowErr(true);
    else setShowErr(false);
  };

  return (
    <MainForm onSubmit={(e) => e.preventDefault()}>
      <div className="firstForm">
        <h1>Sign Up</h1>
        <span
          onClick={() => setShowReg((e) => !e)}
          className="material-icons icons"
        >
          close
        </span>
      </div>
      <Inner>
        <Card>
          <img src="https://freesvg.org/img/administrator.png" alt="" />
        </Card>

        <div className="input-field">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="text"
            placeholder="Password"
          />
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="type"
              name="client_type"
              value={client}
              onChange={(e) => {
                setClient(e.target.value);
                setErr();
              }}
            >
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="Admin"
                labelPlacement="start"
              />
              <FormControlLabel
                value="student"
                control={<Radio />}
                label="Student"
                labelPlacement="start"
              />
            </RadioGroup>
          </FormControl>
          {!showErr && (
            <p style={{ color: "red" }}>Student Can't Signup Directly</p>
          )}
          <button onClick={handleRegister} className="btn-email">
            Continue
          </button>
        </div>
      </Inner>
    </MainForm>
  );
};

const MainForm = styled.form`
  padding: 24px;
  width: 100%;
  height: 500px;

  & .firstForm {
    display: flex;
    justify-content: space-between;
    color: #fef5ed;
  }

  & .icons {
    color: black;
    cursor: pointer;
  }

  & h1 {
    font-size: 25px;
    font-weight: 500;
    line-height: 22px;
    margin: 0;
  }
  & .input-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    height: 350px;
  }
  & .input-field input {
    height: 48px;
    width: 320px;
    margin: 0;
    padding: 0;
    border: 1px solid rgba(88, 87, 87, 0.1);
    border-radius: 4px;
    background-color: #fcfcfb;
    font-family: Noto Sans, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    padding: 0px 20px;
    margin-bottom: 8px;
    border: 1px solid rgb(37, 100, 40);
    outline: none;
  }
  & .input-field button {
    margin-top: 12px;
    font-family: Noto Sans, sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 18px;
    text-transform: unset;
    background: rgb(37, 100, 40);
    border-radius: 10px;
    color: #fff;
    height: 40px;
    padding: 0 16px;
    height: 48px;
    width: 320px;
    cursor: pointer;
    outline: none;
    border: none;
    :hover {
      background-color: rgb(48, 122, 52);
    }
  }
  & .input-field p a {
    margin-top: 24px;
    font-family: Noto Sans, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 20px;
  }
  & .input-field p a {
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-transform: uppercase;
  }
  & .smallP {
    font-size: 10px;
    a {
      font-size: 10px !important;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`;

export const Card = styled.div`
  height: 200px;
  width: 200px;
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

export const Inner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 25px;
`;
