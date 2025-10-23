import React from "react";
import "./Synonyms.css";

export default function Synonmys(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <span>
          <div className="synonym"><strong >synonyms: </strong></div>
          {props.synonyms.map(function (synonym, index) {
            return (
           
              <li key={index} className="synonym-words">
                {synonym}
              </li>
           );
          })}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
