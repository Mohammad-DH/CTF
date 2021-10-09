import React, { useContext } from "react";
import { root } from "../context/API";
import { Logic } from "./Logic";

function Input() {
  const { change, directory, clear } = useContext(root);

  function ScrollToEnd() {
    var element = document.querySelector(".terminal");
    element.scrollTop = element.scrollHeight;
  }

  return (
    <div className="terminal-input">
      <span className="green">[mr.DH@CTF {directory} ]$</span>

      <input
        className="main-input"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            let response = Logic(directory, e.target.value, change);
            change("history", [e.target.value, response]);
            e.target.value = "";
            setTimeout(() => {
              ScrollToEnd();
            }, 10);
          }
          if (e.ctrlKey === true && e.key === "l") {
            e.preventDefault();
            clear();
          }
        }}
        type="text"
        autofocus="true"
      />

      <style jsx>{`
        .terminal-input {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }
        .terminal-input span {
          white-space: nowrap;
        }
        .terminal-input input {
          color: white;
          font-size: 1.5rem;
          flex: 9;
          border: none;
          outline: none;
          background-color: transparent;
        }
      `}</style>
    </div>
  );
}

export default Input;
