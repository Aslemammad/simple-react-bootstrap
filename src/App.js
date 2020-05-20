import React, { useState } from "react";
import "./style/App.scss";
import { Button, Container, Row, Col } from "react-bootstrap";
import logo from "./logo.svg";
import PizzaCard from "./Components/PizzaCard";
import Header from "./Components/Header";
import Confirmation from "./Components/Confirmation";
import data from "./data.json";

import "./style/App.scss";

const App = (props) => {
  console.log(data);
  const [
    personsState,
    setPersons,
  ] = useState({
    persons: [],
    times: 0,
  });
  console.log();
  return (
    <>
      <Header />
      <Container className="p-2">
        <Row>
          {data.map((
            pizza,
            index,
          ) => (<Col
            sm={12}
            md={6}
            lg={4}
            smOffset={3}
            key={`${pizza.id}-${pizza.image}-${index}`}
            className="mb-2"
          >
            <PizzaCard data={pizza} />
          </Col>))}
        </Row>
      </Container>
    </>
  );
};
export default App;
