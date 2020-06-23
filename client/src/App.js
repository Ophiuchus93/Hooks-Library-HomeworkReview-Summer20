import React from "react";
import { Route, } from "react-router-dom";
import Books from "./components/Books";
import BookView from "./components/BookView";
import { Container, } from "react-bootstrap";

const App = () => (
  <>
    <Container>
      <Route exact path="/" component={Books} />
      <Route exact path="/api/books/:id" component={BookView} />
    </Container>
  </>
);

export default App;