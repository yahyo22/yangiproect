import React from "react";
import styled from "styled-components";
import Cardd from "../../components/card/Cardd";
export default function Home() {
  return (
    <StyledHome>
      <div className="container">
        <div className="wrapper-home">
          <div className="cards">
            <Cardd />
          </div>
        </div>
      </div>
    </StyledHome>
  );
}
const StyledHome = styled.div`
  background: #f6f6f9;
  .container {
    .wrapper-home {
      margin: 40px 0px;
      .cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }
    }
  }
`;
