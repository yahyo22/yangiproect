import React from "react";
import styled from "styled-components";
import Cardd from "../../components/card/Cardd";

export default function Home() {
  const Carousel = require("3d-react-carousal").Carousel;
  let slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />,
  ];
  const callback = function (index) {
    console.log("callback", index);
  };
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
            <Carousel
              slides={slides}
              autoplay={false}
              interval={4000}
              onSlideChange={callback}
            />
            <h2>Prezident maktabi Prezident </h2>
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
    }

    .carrusel__wrapper {
      padding: 100px 0px;
      width: 100%;
      background-color: #fff;

      h1 {
        font-weight: 500;
        font-size: 40px;
        line-height: 64px;
        color: #313949;
      }

      .carrusel-main {
        width: 100%;
        position: relative;

        h2 {
          margin: 0 auto;
          margin-top: 360px;
          padding-left: 29px;
          width: max-content;
          font-weight: 500;
          font-size: 40px;
          line-height: 64px;
          color: #fff;
          background: rgba(18, 170, 228, 0.3);
        }
      }
    }
  }
`;
