import React from "react";

function Section(props) {
  const tab = [];
  console.log(props.images);

  for (let i = 0; i < props.images.length; i++) {
    tab.push(<img src={props.images[i]} alt="movie" />);
  }
  return (
    <div>
      <p className="categories">{props.category}</p>
      <br />
      <div className="movies-list">{tab}</div>
      <br />
    </div>
  );
}

export default Section;
