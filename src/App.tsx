import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

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
