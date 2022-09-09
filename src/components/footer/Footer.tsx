import React from "react";
import styled from "styled-components";
import { transform } from "typescript";
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
          <div className="glavniy-silka">
            <div className="silka">
              <i className="icon mail"></i>
              <p>Registon.@gmail.uz</p>
            </div>
            <div className="silka">
              <i className="icon phone"></i>
              <p>+998 90 010-85-10</p>
            </div>
            <div className="sotial">
              <p>Ijtimoiy tarmoqlarimiz:</p>
              <div className="p">
                <div className="icon facebook"></div>
                <div className="icon telegram"></div>
                <div className="icon insta"></div>
                <div className="icon twiter"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <h2 style={{fontSize: "16px",fontWeight: "600",lineHeight: "24px",letterSpacing: "0em",color:" #FFFFFF",padding:"12px 0px 0px 90px",borderTop:"1px solid #ffffff4d ", width:"100%", }}
          >@Designer_ElyorAbdumalikov</h2>
        </section>
    </StyledFooter>
  );
}
const StyledFooter = styled.div`
  background: #12aae4;
section {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 24px;
    gap: 25px;
    flex-wrap: wrap;
    h1{
      margin-bottom: 16px;
    }
      ul {
        list-style:disc;
        display: flex;
        flex-direction: column;
        gap: 16px;
        li {
          color: #ffffff;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: left;
          transform: translateX(20px);
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
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #ffffff;
      }

    }
    .glavniy-silka{
      display: flex;
      flex-direction: column;
      gap: 32px;
      
    .silka{
      display: flex;
      gap: 8px;
      align-items: center;
      p{
font-size: 18px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;

      }
    }
    .sotial{
      .p{
      margin-top: 12px;
      display: flex;
      gap: 24px;
      transform: translateX(8px);
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
      }
    }
    }
  
`
