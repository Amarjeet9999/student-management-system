import React from "react";
import styled from "styled-components";
import axios from "axios";

export const StudentDB = () => {
  const [contest, setContest] = React.useState([]);

  const fetchContest = async () => {
    try {
      await axios.get("http://localhost:5000/contest").then((res) => {
        setContest(res.data.data);
        console.log(res.data.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchContest();
  }, []);

  return (
    <Main>
      <div className="contest">
        <h1
          style={{ margin: "auto", width: "max-content", marginBottom: "25px" }}
        >
          All Contests
        </h1>
        {contest &&
          contest.map((el) => {
            return (
              <Card>
                <div className="type">
                  <span>Contest</span>
                  <span>{el.type}</span>
                </div>
                <div className="title type2">
                  <span>Title : </span>
                  <span>{el.title}</span>
                </div>
                <div className="time type2">
                  <span>Time : </span>
                  <span>{el.time}</span>
                </div>
                <div className="deadline type2">
                  <span>Deadline : </span>
                  <span>{el.deadline}</span>
                </div>
              </Card>
            );
          })}
      </div>
    </Main>
  );
};

const Main = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  background-color: #369197;
  height: max-content;
  min-height: 100vh;

  & .contest {
    width: 600px;
    margin: 0 auto;
    padding-top: 50px;
  }
`;

const Card = styled.div`
  margin: auto;
  height: 200px;
  width: 500px;
  cursor: pointer;
  border: 1px solid rgba(189, 186, 186, 0.2);
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  &:hover {
    box-shadow: rgba(131, 27, 27, 0.2) 0px 2px 8px 0px;
  }

  & .type {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 600;
  }

  & .type2 {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
  }
`;
