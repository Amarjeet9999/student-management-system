import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import axios from "axios";

export const AdminDB = () => {
  const [contest, setContest] = React.useState();
  const [addForm, setAddForm] = React.useState();
  const [showSt, setShowSt] = React.useState(false);
  const [stData, setStData] = React.useState([]);
  const [studentData, setStudentData] = React.useState({});

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setStudentData({ ...studentData, [name]: value });
  };

  const fetchData = async () => {
    try {
      await axios.get(`http://localhost:5000/student`).then((res) => {
        setStData(res.data.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const addStudent = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/student", {
          name: studentData.name,
          email: studentData.name,
          password: "12345",
          city: studentData.city,
          age: studentData.age,
          education: studentData.education,
          gender: studentData.gender,
          phone: studentData.phone,
          roles: "student",
        })
        .then((res) => fetchData());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Main>
      <div className="inner">
        <Button
          style={{
            height: "50px",
            width: "200px",
          }}
          variant="contained"
          color="primary"
          onClick={() => {
            setShowSt(false);
            setAddForm(false);
            setContest(true);
          }}
        >
          Add Contest
        </Button>
        <Button
          style={{
            height: "50px",
            width: "200px",
          }}
          variant="contained"
          color="primary"
          onClick={() => {
            setShowSt(false);
            setContest(false);
            setAddForm(true);
          }}
        >
          Add Student
        </Button>
        <Button
          style={{
            height: "50px",
            width: "200px",
          }}
          variant="contained"
          color="primary"
          onClick={() => {
            setShowSt((e) => true);
          }}
        >
          All Students
        </Button>
      </div>
      {!showSt ? (
        <div className="form">
          {contest && (
            <form action="">
              <h1>Add Contest</h1>
              <div className="input-field">
                <select name="type">
                  <option defaultValue value="dsa">
                    DSA
                  </option>
                  <option value="coding">Coding</option>
                </select>
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Time" />
                <input type="text" placeholder="Deadline" />
                <input type="text" placeholder="tags" />
                <input type="submit" value="Continue" />
              </div>
            </form>
          )}
          {addForm && (
            <form action="" onSubmit={addStudent}>
              <h1>Add Student</h1>
              <div className="input-field">
                <input
                  name="name"
                  onChange={handleChange}
                  type="text"
                  placeholder="Name"
                />
                <input
                  name="email"
                  onChange={handleChange}
                  type="text"
                  placeholder="Email"
                />
                <input
                  name="age"
                  onChange={handleChange}
                  type="text"
                  placeholder="Age"
                />
                <input
                  name="gender"
                  onChange={handleChange}
                  type="text"
                  placeholder="Gender"
                />
                <input
                  name="phone"
                  onChange={handleChange}
                  type="text"
                  placeholder="Phone No."
                />
                <input
                  name="education"
                  onChange={handleChange}
                  type="text"
                  placeholder="Education"
                />
                <input
                  name="city"
                  onChange={handleChange}
                  type="text"
                  placeholder="City"
                />
                <input type="submit" value="Create Account" />
              </div>
            </form>
          )}
        </div>
      ) : (
        <Students>
          <h1 style={{ width: "max-content", margin: "auto" }}>All Students</h1>
          <div class="main">
            <table className="table">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Gender</th>
              </tr>
              {stData?.map((el) => {
                return (
                  <tr>
                    <td>{el.name}</td>
                    <td class="email">{el.email}</td>
                    <td>{el.city}</td>
                    <td>{el.gender}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </Students>
      )}
    </Main>
  );
};

export const Main = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  background-color: #d4a0ba;
  height: max-content;
  min-height: 100vh;
  border: 2px solid green;
  & .inner {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 700px;
    margin: auto;
    height: max-content;
    margin: 45px auto;
  }

  & .form {
    height: max-content;
    width: 900px;
    margin: auto;
    display: flex;
  }
  & .form form {
    display: flex;
    flex-direction: column;
    margin: auto;
    height: auto;
    margin-bottom: 25px;
  }

  & .input-field {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    width: 400px;
  }
  & .input-field select {
    height: 50px;
    margin: 10px 0;
    padding: 0 20px;
    border: none;
    outline: none;
    font-size: 15px;
    border-radius: 5px;
  }

  & .input-field input {
    height: 50px;
    margin: 10px 0;
    padding: 0 20px;
    border: none;
    outline: none;
  }
  & .input-field input[type="submit"] {
    background-color: rgb(25, 118, 210);
    border: none;
    outline: none;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    cursor: pointer;
    :hover {
      background-color: rgb(21, 106, 190);
    }
  }
`;

const Students = styled.div`
  width: 700px;
  margin: auto;

  & .table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
    text-transform: capitalize;

    & td,
    th {
      border: 1px solid #2e2c2c;
      padding: 8px;
    }

    & th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: rgb(46, 125, 50);
      color: white;
    }

    & tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    & tr:nth-child(odd) {
      background-color: #9e9d9d;
    }
    & .email {
      text-transform: none;
    }
  }
`;
