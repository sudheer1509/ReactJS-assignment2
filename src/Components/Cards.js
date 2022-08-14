import React from "react";
import "../Components/Cards.css";
const Cards = ({ data }) => {
  return (
    <>
      <div className="card">
        <img src={data.thumbnail} alt={data.title} className="images" />
        <div className="text-part">
          <h1 className="title">{data.title}</h1>
          <span className="author">{data.author}</span>|
          <span className="date">{data.date}</span>
          <p className="description">{data.description}</p>
        </div>
      </div>
    </>
  );
};
export default Cards;
