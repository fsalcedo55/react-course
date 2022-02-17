import React from "react";
import Joke from "./components/Joke";

export default function App() {
  return (
    <div>
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        number={3}
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        number={3}
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        number={3}
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        number={3}
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
        number={3}
      />
      <Joke
        punchline="It’s hard to explain puns to kleptomaniacs because 
they always take things literally."
        number={3}
      />
    </div>
  );
}
