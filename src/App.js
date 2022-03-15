import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const box = new Array(60);
  const [id, setId] = useState(0);
  useEffect(() => {
    setTimeout(() => setId(id + 1), 1000);
    if (id === 61) {
      setId(0);
    }
  }, [id]);

  return (
    <div className="App">
      <h1>Project 1</h1>
      <div className="container">
        {[...box].map((e, i) => (
          <div
            className="box"
            style={{ background: i === id ? "white" : "black" }}
            key={i}
          ></div>
        ))}
      </div>
    </div>
  );
}
