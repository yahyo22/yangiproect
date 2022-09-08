import React from "react";
import styled from "styled-components";
import Cardd from "../../components/card/Cardd";

export default function Home() {
  var Carousel = require("3d-react-carousal").Carousel;
  let slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />,
  ];
  return (
    <StyledHome>
      <div className="container">
        <div className="wrapper-home">
          <div className="cards">
            <Cardd />
          </div>

        </div>

        {/* CARRUSEL SECTION */}
        <section className="carrusel__wrapper">
          <h1>Maktablar</h1>
          <main className="carrusel-main">
            <Carousel slides={slides} autoplay={true} interval={5000} />
          </main>
        </section>
      </div>
    </StyledHome>
  );
}
const StyledHome = styled.div`
  background: #f6f6f9;
  .container {
    padding: 40px 0px;

    .wrapper-home {
      .cards {
      margin: 40px 0px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }
      .carusel{
        background: #FFFFFF;
      }
    }
  }
`;
