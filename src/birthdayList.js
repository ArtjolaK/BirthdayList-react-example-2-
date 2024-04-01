import React, { Fragment, useState } from "react";

import { database } from "./database";
import "./index.css";

const Birthdaylist = () => {
  const [people, setPeople] = useState(database);
  const clickEvent=()=>{
    const newPeople=people.filter((person)=>{
      person.id !== id
       setPeople(newPeople)
    })  }
  return (
    <>
      <div className="container">
        <h1>5 birthdays today </h1>
        {people.map((person) => {
          const { id, name, age, img } = person;

          return (
            <>
              <div className="div">
                <img src={img} alt="" />
                <article key={id} className="list ">
                  <h1>{name}</h1>
                  <h1>{age} years</h1>
            <button onClick={()=> clickEvent(id)}>Clear Item</button>
                </article>
              </div>
              .
            </>
          );
        })}
        <button type="button" className="btn" onClick={() => setPeople([])}>
          Clear all
        </button>
      </div>
    </>
  );
};

export default Birthdaylist;
