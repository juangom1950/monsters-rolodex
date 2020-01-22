import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

//This is a functional component. They take something called props
//props is always going to have children proerty. It is what is insede the tags component in App.js
export const CardList = props => {
  console.log(props.monsters);
  return (
    <div className="card-list">
      {/*{props.children} */}
      {props.monsters.map(monster => (
        // react needs this key to know which datat has changed
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
