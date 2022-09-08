import React from "react";
import styled from "styled-components";
import Cardd from "../../components/card/Cardd";
import maktab from "../../assets/img/maktab.png";
import maktab2 from "../../assets/img/maktab2.png";
import maktab3 from "../../assets/img/maktab3.png";
import uzbekistan from "../../assets/img/uzbekistan.png";
export default function Home() {
  var Carousel = require("3d-react-carousal").Carousel;
  let slides = [
    <img src={maktab} alt="1" />,
    <img src={maktab2} alt="2" />,
    <img src={maktab3} alt="3" />,
  ];
  return (
    <StyledHome>
      <div className="container">
        <div className="wrapper-home">
          <div className="cards">
            <Cardd />
          </div>
        </div>
        <div className="main-2">
          {/* <section className="carrusel__wrapper">
          <h1>Maktablar</h1>
          <main className="carrusel-main">
            <Carousel slides={slides} autoplay={true} interval={100000} />
          </main>
        </section> */}
        <section className="uzbekistan">
          <section>
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
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }
    }
    .main-2{
      background: #FFFFFF;
    .uzbekistan {
      margin-top: 115px;
      align-items: center;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: 23px;

      .uzbek-2 {
        
      background: #FFFFFF;
border: 1px solid rgba(49, 57, 73, 0.1);
border-radius: 24px;
        gap: 46px;
        display: flex;
        padding: 40px 32px;
        div {
          display: flex;
          flex-direction: column;
          gap: 48px;
          text-align: center;
          h2 {
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 32px;
            color: #12aae4;
          }
          p {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            font-size: 40px;
            line-height: 48px;
            color: #12aae4;
          }
        }
      }
    }
    }
  }
`;
