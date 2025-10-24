import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleImgResponse(response) {
    setPhotos(response.data);
  }

  function search() {
    let apiKey = `f2784deoc3ec5b8af02864390dt6ce37`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let apiImgKey = `f2784deoc3ec5b8af02864390dt6ce37`;
    let apiImgUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiImgKey}`;
    axios.get(apiImgUrl).then(handleImgResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
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
        <Photos photos={photos} />
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
