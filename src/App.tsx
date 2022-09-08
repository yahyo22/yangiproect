import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/js/dist/carousel.js";

// Style
import { GlobalStyle } from "./assets/style/GlobalStyle";

// Components
import Router from "./router/Router";

export default function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </StyledApp>
  );
}
const StyledApp = styled.div``;
