import "./App.css";
import logo from "./shecodes-logo.avif";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small> Coded by Tamia Sims</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
