import React from "react";

export default function Synonmys(props) {
  if (props.synonyms) {
    return (
      <div className="Synonmys">
        <span>
       
          <strong>synonyms </strong>
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
