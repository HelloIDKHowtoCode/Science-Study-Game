import React, { useState } from 'react';

export default function App() {
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [current, setCurrent] = useState(null);
  const [started, setStarted] = useState(false);

  const questions = [
    { q: "Name the 4 terrestrial planets.", a: "mercury, venus, earth, mars" },
    { q: "Where is the asteroid belt located?", a: "between mars and jupiter" },
    { q: "What type of body is a comet?", a: "icy body" },
    { q: "What causes tides?", a: "moon gravity" },
    { q: "How long is one full moon cycle?", a: "29.5 days" },
    { q: "What is mutualism?", a: "both benefit" },
    { q: "What kingdom are bacteria in?", a: "monera" },
    { q: "Classification order?", a: "kingdom phylum class order family genus species" },
    { q: "What causes seasons?", a: "earth tilt" },
    { q: "What is a lunar eclipse?", a: "moon in earth shadow" }
  ];

  function startGame() {
    setStarted(true);
    nextQ();
  }

  function nextQ() {
    setCurrent(questions[Math.floor(Math.random() * questions.length)]);
    setAnswer("");
  }

  function submit() {
    if (!current) return;
    if (answer.trim().toLowerCase() === current.a) {
      setScore(score + 5);
    }
    nextQ();
  }

  return (
    <div style={{ textAlign: "center", padding: 20, color: "white", background: "#111", height: "100vh" }}>
      <h1>Science Quest</h1>
      {!started ? (
        <button onClick={startGame}>Start</button>
      ) : (
        <div>
          <h2>{current?.q}</h2>
          <input value={answer} onChange={e=>setAnswer(e.target.value)} />
          <br />
          <button onClick={submit}>Submit</button>
          <p>Score: {score}</p>
        </div>
      )}
    </div>
  );
}
