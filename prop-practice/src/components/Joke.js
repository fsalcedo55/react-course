import React from "react";

export default function Joke(props) {
  return (
    <div>
      <p>
        <b>Setup: </b>
        {props.setup}
      </p>
      <p>
        <b>Punchline: </b>
        {props.punchline}
      </p>
      ***************
    </div>
  );
}
