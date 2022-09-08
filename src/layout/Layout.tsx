import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";

export default function Layout() {
  return (
    <StyledLayout>
      <Navbar />
      <Outlet />
    </StyledLayout>
  );
}
const StyledLayout = styled.div``;
