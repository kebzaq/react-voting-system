import React from "react";
import { useState } from "react";

export default function Cards(props) {
  const [count, setCount] = useState(0);
  const {
    team: { id, img, name },
  } = props;
  const clickVote = (e) => {
    // console.log(e.target, id);
    if (props.teamId === id) {
      setCount(count + 1);
    }
  };
  // console.log(props.teamId, props.team);
  return (
    <div id={props.teamId} className="card">
      <div>
        <img id="img" src={img} alt="team image" />
        <p>{name}</p>
        <button className="btn" onClick={clickVote}>
          Vote
        </button>
      </div>
      <div className="count">
        <p>
          Vote count: <span id={id}>{count}</span>
        </p>
      </div>
    </div>
  );
}
