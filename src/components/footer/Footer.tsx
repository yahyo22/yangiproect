import React from "react";
import styled from "styled-components";
export default function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <section>
          <div>
            <h1>Yangiliklar</h1>
            <ul>
              <li>O‘qituvchilar</li>
              <li>O‘quvchilar</li>
              <li>Ota-onalar</li>
            </ul>
          </div>
          <div>
            <h1>Maktablar</h1>
            <ul>
              <li>Davlat maktablari</li>
              <li>Prezident maktablari</li>
              <li>Ijod maktablari</li>
              <li>Xususiy maktablar</li>
            </ul>
          </div>
          <div>
            <h1>Olimpiyadalar</h1>
            <ul>
              <li>Davlat olimpiyadalari</li>
              <li>Xalqaro olimpiyadalar</li>
              <li>Xalqaro tanlovlar</li>
              <li>Xususiy olimpiyadalar</li>
            </ul>
          </div>
          <div>
            <h1>Kutubxona</h1>
            <ul>
              <li>Testlar</li>
              <li>Imtihon</li>
              <li>Hujjatlar</li>
            </ul>
          </div>
          <div>
            <div>
              <i className="icon mail"></i>
              <p>Registon.@gmail.uz</p>
            </div>
            <div>
              <i className="icon phone"></i>
              <p>+998 90 010-85-10</p>
            </div>
            <div>
              <p>Ijtimoiy tarmoqlarimiz:</p>
              <div>
                <div className="facebook"></div>
                <div className="icon telegram"></div>
                <div className="icon insta"></div>
                <div className="icon twiter"></div>
              </div>
            </div>
          </div>
        </section>
        <section></section>
      </div>
    </StyledFooter>
  );
}
const StyledFooter = styled.div`
  background: #12aae4;
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      ul {
        list-style: circle;
        li {
          color: #ffffff;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: left;
        }
      }
      h1 {
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #ffffff;
      }
      p {
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #ffffff;
      }
    }
  }
`;
