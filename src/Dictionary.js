import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event){
      event.preventDefault();
      search();
  }

  function search() {
    let apiKey = `f2784deoc3ec5b8af02864390dt6ce37`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function load(){
    setLoaded(true);
    search();
  }

  if (loaded){return (
    <div className="Dictionary">
      <section className="form-background">
        <h1> Enter a word..</h1>

        <form>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
          <input
            type="submit"
            value="Search"
            className="button"
            onClick={handleSubmit}
          />
        </form>
        <div className="hint">suggested words: rainbow, butterfly, cloud</div>
      </section>
      <Results results={results} />
    </div>
  );} else {
    load();
    return "Loading.."
  }
  
}
