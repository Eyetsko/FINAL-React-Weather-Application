import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <div>
            This project was coded by Emily Yetsko and is{" "}
            <a
              href="https://github.com/Eyetsko/test"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
