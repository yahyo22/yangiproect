import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Components
import SelectSmall from "../select/Select";

// Images
import logo from "../../assets/img/logo.png";
import user from "../../assets/icon/user.svg";

export default function Navbar() {
  return (
    <StyledNavbar>
      <div className="container">
        <div className="logo__wrapper">
          <Link to="#">
            <img src={logo} alt="logo" />
            <h1 className="nav-logo-h1">School</h1>
          </Link>
        </div>
        <ul className="nav-list">
          <li className="list">
            <Link to={"#"}>Yangiliklar</Link>
          </li>
          <li className="list">
            <Link to={"#"}>Maktablar</Link>
          </li>
          <li className="list">
            <Link to={"#"}>Olimpiyadalar</Link>
          </li>
          <li className="list">
            <Link to={"#"}>Kutubxona</Link>
          </li>
          <li className="list">
            <Link to={"#"}>Testlar</Link>
          </li>
          <li className="list">
            <Link to={"#"}>Imtihon</Link>
          </li>
          <li className="list">
            <Link to={"#"}>Hujjatlar</Link>
          </li>
        </ul>
        <div className="user-profile">
          <div className="laguage__wrapper">
            <SelectSmall />
          </div>
          <Link to="#">
            <img src={user} alt="user-icon" />
          </Link>
        </div>
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  padding: 16px 0 8px;
  width: 100%;
  background-color: #fff;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    .logo__wrapper {
      a {
        display: flex;
        align-items: center;
        gap: 6px;

        h1 {
          font-size: 28px;
          line-height: 48px;
          color: #12aae4;
        }
      }
    }
    .nav-list {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 32px;

      .list {
        a {
          font-size: 16px;
          line-height: 24px;
          color: #313949;
          position: relative;

          &:hover {
            &::before {
              content: "";
              width: 61px;
              height: 8px;
              background-color: #12aae4;
              border-radius: 0px 0px 6px 6px;
              position: absolute;
              top: -20px;
              left: 0px;
              transition: 0.3s;
            }
          }
        }
      }
    }

    .user-profile {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 35px;

      .laguage__wrapper {
        display: flex;
        align-items: center;
        position: relative;

        h2 {
          margin: 0px 13px 0px 7px;
          font-size: 16px;
          line-height: 24px;
          color: #313949;
        }

        .select-arrow {
          width: 10px;
          height: 10px;
          border-bottom: 2px solid #313949;
          border-right: 2px solid #313949;
          transform: rotate(44deg);
        }
      }
      img {
        cursor: pointer;
      }
    }
  }
`;
