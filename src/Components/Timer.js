import React, { useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [boolean, setBoolean] = useState(false);

  function Time(count) {
    let milliseconds = Math.floor((count % 1000) / 10);
    let seconds = Math.floor((count / 1000) % 60);
    let minutes = Math.floor((count / (1000 * 60)) % 60);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    return minutes + ":" + seconds + "." + milliseconds;
  }

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        width: "100vh",
        height: "100vh",
      }}
    >
      <div>{Time(count)}</div>

      <div>
        <button>{boolean ? "Stop" : "Start"}</button>
      </div>
    </div>
  );
};

export default Timer;
