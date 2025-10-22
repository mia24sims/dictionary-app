import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
     
       <span> <strong>definition: </strong></span>
        {props.meaning.definition}
     
   
        <Example example={props.meaning.example} />
  
      <Synonyms synonyms={props.meaning.synonyms} />
    <br/>
    </div>
  );
}
