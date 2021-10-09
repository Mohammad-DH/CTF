import React, { useContext, useEffect } from "react";
import Box from "../components/Box";
import Display from "../components/Display";
import Input from "../components/Input";
import { root } from "../context/API";

function Terminal() {
  const { challenge1, challenge2, challenge3 } = useContext(root);

  let focus = (i) => {
    document.querySelector(i).focus();
  };

  useEffect(() => {
    focus(".main-input");
  }, []);

  return (
    <div className="terminal">
      <Display />
      <Input />

      <Box
        state={challenge1}
        title={"challenge1"}
        content={[
          "66 6c 61 67 20 69 73 20 68 69 64 64 65 6e 20 21 0a 61 73 20 77 65 27 76 65 20 63 6f 6d 65 20 54 6f 20 72 65 61 6c 69 7a 65 2c 20 74 48 65 20 49 64 65 61 20 74 68 61 74 20 73 65 63 75 72 69 74 79 20 73 74 61 72 74 73 20 61 4e 64 20 65 6e 64 73 20 77 69 74 68 20 74 68 65 20 70 75 72 63 68 61 73 65 20 6f 66 20 61 20 70 72 65 70 61 63 4b 61 67 65 64 20 66 69 72 65 77 61 6c 6c 20 69 73 20 73 69 6d 70 6c 79 20 6d 69 73 67 75 69 64 65 64 2e 20 2d 20 61 72 74 20 61 69 74 74 6d 61 6e 6e",
        ]}
      />
      <Box
        state={challenge2}
        title={"challenge2"}
        content={[
          "d3JvbmcgbGluZQp3cm9uZyBsaW5lCndyb25nIGxpbmUKa2V5ID0gbGlrZSBhCndyb25nIGxpbmUKd3JvbmcgbGluZQp3cm9uZyBsaW5l",
        ]}
      />
      <Box
        state={challenge3}
        title={"challenge3"}
        content={[
          "ZmlsbGVyIGZpbGxlciBmaWxsZXIgZmlsbGVyIEhBQ0tFUiBmaWxsZXIgZmlsbGVyIGZpbGxlciBmaWxsZXI=",
        ]}
      />
      <style jsx>{`
        .terminal {
          width: 99vw;
          height: 99vh;
          color: white;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}

export default Terminal;
