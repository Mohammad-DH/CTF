import React, { createContext, useState } from "react";

export const root = createContext();

function API({ children }) {
  const [help, sethelp] = useState(false);
  const [about, setabout] = useState(false);
  const [challenge1, setchallenge1] = useState(false);
  const [challenge2, setchallenge2] = useState(false);
  const [challenge3, setchallenge3] = useState(false);

  const [history, sethistory] = useState([]);
  const [directory, setdirectory] = useState("~");

  const clear = () => {
    sethistory([]);
  };

  const change = (state, value) => {
    switch (state) {
      case "help":
        sethelp(value);
        break;

      case "about":
        setabout(value);
        break;

      case "challenge1":
        setchallenge1(value);
        break;

      case "challenge2":
        setchallenge2(value);
        break;

      case "challenge3":
        setchallenge3(value);
        break;
      case "history":
        sethistory([...history, value]);
        break;
      case "directory":
        setdirectory(value);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <root.Provider
        value={{
          help,
          about,
          challenge1,
          challenge2,
          challenge3,
          change,
          history,
          directory,
          clear,
        }}
      >
        {children}
      </root.Provider>
    </div>
  );
}

export default API;
