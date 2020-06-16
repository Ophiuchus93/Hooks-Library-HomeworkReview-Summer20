import React from "react";
import { Route, } from "react-router-dom";
import Books from "./components/Books";
import { Container, } from "react-bootstrap";

const App = () => (
  <>
    <Container>
      <Route exact path="/" component={Books} />
    </Container>
  </>
);

export default App;