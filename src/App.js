import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <div>
            This project was coded by Emily Yetsko and is{" "}
            <a href="https://github.com/Eyetsko/test">open-sourced on Github</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
