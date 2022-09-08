import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

export default function Layout() {
  return (
    <StyledLayout>
      <Navbar />
      <Outlet />
      <Footer/>
    </StyledLayout>
  );
}
const StyledLayout = styled.div``;
