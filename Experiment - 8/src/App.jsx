import { useState } from "react";
function GameScore() {
  const [score, setScore] = useState(0);
  return (
    <div>
      <h1>Current Score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>score a point</button>
    </div>
  );
}
export default GameScore;