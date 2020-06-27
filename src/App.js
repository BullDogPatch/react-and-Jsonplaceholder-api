import React from "react";
import "./styles.css";
import PersonList from "./Components/PersonList";
import Header from "./Components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <PersonList />
    </div>
  );
}

export default App;
