import React from "react";
import "./App.css";

import Section from "./components/Section";

import datas from "./assets/datas.json";

function App() {
  const tab = [];
  for (let i = 0; i < datas.length; i++) {
    const name = datas[i].category;
    const movies = datas[i].images;

    tab.push(<Section category={name} images={movies} />);
  }

  return (
    <>
      <div className="title">My Netflix</div>
      <br />

      <div>{tab}</div>
      <br />
    </>
  );
}

export default App;
