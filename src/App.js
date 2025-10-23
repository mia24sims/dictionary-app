import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="App">
        <header className="App-header">Dictionary App</header>
        <main>
          <Dictionary defaultKeyword="rainbow" />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            Coded by Tamia Sims, open-sourced on{" "}
            <a href="https://github.com/mia24sims/dictionary-app">Github</a>,
            and hosted on{" "}
            <a href="https://dictionary-app-shecodes-bymia.netlify.app/">
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
