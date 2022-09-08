import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Images
<<<<<<< HEAD
import logo from "../../assets/img/logo.png";
import SelectSmall from "../select/Select";

export default function Navbar() {
  return (
    <StyledNavbar>
      <div className="container">
        <div className="logo__wrapper">
          <Link to="#">
            {/* <img src={logo} alt="logo" /> */}
            <h1 className="nav-logo-h1">School</h1>
          </Link>
=======
// import logo from "../../assets/img/logo.png";

export default function Navbar() {
  return (
    <nav>
        <div className="container">
            <ul>
                <li>
                    <Link to="#">
                        <img  alt="logo" />
                    </Link>
                </li>
            </ul>
>>>>>>> 4f4e35f2acb14e7a049aea0f67d02bd45667ac02
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

        /* .select-items-wrapper {
          padding: 8px 12px;
          width: 120px;
          height: 100%;
          background-color: #f6f6f9;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          row-gap: 12px;
          position: absolute;
          left: 0px;
          bottom: 0px;
        } */
      }
    }
  }
`;
