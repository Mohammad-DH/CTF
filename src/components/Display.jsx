import React, { useContext } from "react";
import { root } from "../context/API";
function Display() {
  const { history } = useContext(root);
  return (
    <div className="terminal-display">
      {history !== []
        ? history.map((e) => {
            return (
              <div className="history">
                <div className="command">
                  <span className="green command-info">
                    [mr.DH@CTF {e[1].oldDirectory} ]$
                  </span>
                  <span className="command-input">{e[0]}</span>
                </div>

                <div className="response">
                  {e[1].response
                    ? e[1].response.map((x) => {
                        return <span>{x}</span>;
                      })
                    : ""}
                </div>
              </div>
            );
          })
        : ""}
      <style jsx>{`
        .terminal-display {
          width: 100%;
        }
        .history {
          display: flex;
          flex-direction: column;
          font-size: 1.3rem;
        }
        .command {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
        }
        .command-info {
          white-space: nowrap;
          align-self: flex-start;
        }
        .command-input {
          word-wrap: break-word;
          word-break: break-all;
        }
        .response {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        .response span {
          word-wrap: break-word;
          word-break: break-all;
        }
      `}</style>
    </div>
  );
}

export default Display;
