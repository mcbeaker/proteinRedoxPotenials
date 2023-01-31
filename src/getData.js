import React from "react";
import { db } from "./firebase";
import "./getData.css";

//modified from https://github.com/carmellemillar/carmelle-codes-react-app

const getData = () => {
  const saveAnswer = (event) => {
    event.preventDefault();

    const elementsArray = [...event.target.elements];

    const formData = elementsArray.reduce((accumulator, currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }
      
      return accumulator;
    }, {});

    db.collection("Redox").add(formData);
  };

  return (
    <div className="container">
      <h1></h1>
      <form onSubmit={saveAnswer}>
        <input type="text" id="answer" placeholder="Type here..."></input>
        <button>Submit to Firebase</button>
      </form>
    </div>
  );
};

export default getData;