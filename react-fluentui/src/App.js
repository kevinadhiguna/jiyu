import logo from "./logo.svg";
import "./App.css";
import { PrimaryButton } from "@fluentui/react/lib/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PrimaryButton
          text="Learn FluentUI"
          style={{ marginTop: "10px" }}
          onClick={() => {
            window.location.href =
              "https://developer.microsoft.com/en-us/fluentui#/controls/";
          }}
        />
      </header>
    </div>
  );
}

export default App;
