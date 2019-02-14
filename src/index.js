import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <FormWrapper>
      <Form>FORM 1</Form>
      <Form>FORM 1</Form>
    </FormWrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
