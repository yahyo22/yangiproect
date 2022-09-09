import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Components
import SelectSmall from "../select/Select";

// Images
import logo from "../../assets/img/logo.png";
import user from "../../assets/icon/user.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflowY = "none";
  }, [isOpen]);

  return (
    <StyledNavbar>
      <div className={(isOpen ? "Visible " : "") + "container"}>
        <div className="logo__wrapper">
          <Link to="#">
            <img src={logo} alt="logo" />
            <h1 className="nav-logo-h1">School</h1>
          </Link>
        </div>
        <div className={(isOpen ? "On " : "") + "navbar-menu-icon"}>
          <div className="span-wrapper" onClick={() => setIsOpen((p) => !p)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
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

    &.Visible {
      overflow-y: hidden;
      max-height: 100vh;
    }

    .logo__wrapper {
      a {
        display: flex;
        align-items: center;
        gap: 6px;
        text-decoration: none;

        h1 {
          font-size: 28px;
          line-height: 48px;
          color: #12aae4;
        }
      }
    }

    .navbar-menu-icon {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 60px;

      .span-wrapper {
        display: none;
      }

      .nav-list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;

        .list {
          text-decoration: none;

          a {
            margin: 0px;
            padding: 0px;
            font-size: 16px;
            line-height: 24px;
            color: #313949;
            position: relative;
            text-decoration: none;
            transition: 0.2s;

            &::before {
              content: "";
              width: 100%;
              height: 8px;
              border-radius: 0px 0px 6px 6px;
              position: absolute;
              top: -20px;
              left: 0px;
              transition: 0.3s;
            }

            &:hover {
              color: #12aae4;

              &::before {
                content: "";
                width: 100%;
                height: 8px;
                background-color: #12aae4;
                border-radius: 0px 0px 6px 6px;
                position: absolute;
                top: -20px;
                left: 0px;
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

    @media (max-width: 1200px) {
      .navbar-menu-icon {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 20px;
        height: 20px;
        transition: 0.3s;

        .span-wrapper {
          position: absolute;
          top: 34px;
          right: 20px;
          width: max-content;
          display: flex;
          align-items: center;
          flex-direction: column;
          row-gap: 3px;
          cursor: pointer;
          transition: 0.3s;

          &:active {
            transform: translateY(4px);
          }
        }

        span {
          display: block;
          width: 26px;
          height: 3px;
          background-color: #000;
        }

        .nav-list,
        .user-profile {
          display: none;
        }

        &.On {
          position: fixed;
          overflow: hidden;
          z-index: 100;
          top: 0px;
          right: 0px;
          width: 450px;
          height: 100vh;
          max-height: 100vh;
          display: flex;
          align-items: center;
          flex-direction: column;
          row-gap: 20px;
          background-color: #12aae4;
          box-shadow: 10px 10px 10px 10px #3b3b3bc5;
          padding: 100px 20px;

          .nav-list {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            row-gap: 20px;

            .list {
              font-size: 24px;
              font-weight: 700;

              a {
                &:hover {
                  color: #fff;
                }
              }
            }
          }

          .user-profile {
            display: flex;
          }

          @media (max-width: 600px) {
            width: 100%;
          }
        }
      }
    }
  }
`;
