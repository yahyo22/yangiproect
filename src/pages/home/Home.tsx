import React, { useEffect } from "react";
import styled from "styled-components";

// Components
import Cardd from "../../components/card/Cardd";
import { Carousel } from "3d-react-carousal";

// Images
import maktab from "../../assets/img/maktab.png";
import maktab2 from "../../assets/img/maktab2.png";
import maktab3 from "../../assets/img/maktab3.png";
import uzbekistan from "../../assets/img/uzbekistan.png";

export default function Home() {
  // const Carousel = require("3d-react-carousal").Carousel;
  let slides = [
    <img src={maktab} alt="1" />,
    <img src={maktab} alt="2" />,
    <img src={maktab} alt="3" />,
  ];

  return (
    <StyledHome>
      <div className="container">
        <div className="wrapper-home">
          <div className="cards">
            <Cardd />
          </div>
        </div>
      </div>
      <div className="main-2">
        <div className="container">
          <section className="carrusel__wrapper">
            <h1>Maktablar</h1>
            <main className="carrusel-main">
              <Carousel slides={slides} autoplay={true} interval={5000} />
              <h2>Prezident maktabi Prezident </h2>
            </main>
          </section>
          <section className="uzbekistan">
            <section className="uzb-img">
              <img src={uzbekistan} alt="uzbek" />
            </section>
            <section className="uzbek-2">
              <div>
                <h2>Davlat maktablari</h2>
                <p>12 000+</p>
              </div>
              <div>
                <h2>Prezident maktablari</h2>
                <p>23+</p>
              </div>
              <div>
                <h2>Ijod maktablari</h2>
                <p>345+</p>
              </div>
              <div>
                <h2>Xususiy maktablar </h2>
                <p>56+</p>
              </div>
            </section>
          </section>
        </div>
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
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }
    }
  }

  .main-2 {
    background: #ffffff;

    /* CARRUSEL */
    .carrusel__wrapper {
      padding: 100px 0px;
      width: 100%;

      h1 {
        font-weight: 500;
        font-size: 40px;
        line-height: 64px;
        color: #313949;
      }

      .carrusel-main {
        width: 100%;
        height: 560px;

        .react-3d-carousel {
          width: 100%;
          height: 560px !important;

          .slider-single-content {
            width: 77%;
            border-radius: 15px;
            margin: 0 auto;
          }

          .slider-left,
          .slider-right {
            div {
              background-color: #252525;
              border: none;
            }
          }
        }

        @media (max-width: 630px) {
          height: 460px;
          .react-3d-carousel {
            height: 460px !important;
          }
        }
        @media (max-width: 480px) {
          height: 360px;
          .react-3d-carousel {
            height: 360px !important;
          }
        }
        @media (max-width: 348px) {
          height: 260px;
          .react-3d-carousel {
            height: 260px !important;
          }
        }

        h2 {
          margin: 0 auto;
          margin-top: 0px;
          padding-left: 29px;
          width: max-content;
          font-weight: 500;
          font-size: 40px;
          line-height: 64px;
          color: #fff;
          background: rgba(18, 170, 228, 0.3);

          @media (max-width: 630px) {
            font-size: 28px;
          }
          @media (max-width: 480px) {
            font-size: 20px;
          }
          @media (max-width: 348px) {
            font-size: 18px;
          }
        }
      }
    }

    /* XARITA */
    .uzbekistan {
      margin-top: 15px;
      align-items: center;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: 23px;

      .uzb-img {
        max-width: 608px;
        max-height: 325px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .uzbek-2 {
        background: #ffffff;
        border: 1px solid rgba(49, 57, 73, 0.1);
        border-radius: 24px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 50px;
        row-gap: 66px;
        margin-bottom: 63px;
        padding: 40px 30px;

        div {
          display: flex;
          flex-direction: column;
          gap: 48px;
          text-align: center;

          h2 {
            font-weight: 500;
            font-size: 24px;
            line-height: 32px;
            color: #12aae4;
          }
          p {
            font-weight: 600;
            font-size: 40px;
            line-height: 48px;
            color: #12aae4;
          }
        }
      }
    }
  }
`;
