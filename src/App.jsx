import { useState } from "react";
import { teams } from "./teams";
import Cards from "./Cards";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>r: Voting System</h1>
      <div id="wrapper">
        {teams.map((team) => {
          return <Cards teamId={team.id} team={team} />;
        })}
      </div>
    </>
  );
}

export default App;
