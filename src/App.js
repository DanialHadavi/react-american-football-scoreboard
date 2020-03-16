//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [score, setScore] = useState(0);
  const tdHome = () => setScore(score + 1);
  const fgHome = () => setScore(0);
  const [score2, setScore2] = useState(0);
  const tdAway = () => setScore2(score2 + 1);
  const fgAway = () => setScore2(0);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">RMA</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{score}</div>
          </div>
          <div className="timer">90:26</div>
          <div className="away">
            <h2 className="away__name">BAR</h2>
            <div className="away__score">{score2}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={tdHome}>
            Real Madrid Scroed!
          </button>
          <button className="homeButtons__fieldGoal" onClick={fgHome}>
            Reset
          </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={tdAway}>
            Barcelona Scored!
          </button>
          <button className="awayButtons__fieldGoal" onClick={fgAway}>
            Reset
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
