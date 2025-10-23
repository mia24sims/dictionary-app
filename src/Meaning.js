import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
      <h3>{props.meaning.partOfSpeech}</h3>

      
       <span className="definition"> <strong>definition: </strong>
        {props.meaning.definition}
     </span>

        <Example example={props.meaning.example} />

     <Synonyms synonyms={props.meaning.synonyms} />

      <br /></section>
    </div>
  );
}
