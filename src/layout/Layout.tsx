import React from 'react'
import {Outlet} from "react-router-dom";    
import styled from "styled-components";

export default function Layout() {
  return (
    <StyledLayout>
        <Outlet/>
    </StyledLayout>
  )
}
const StyledLayout = styled.div`
    
`