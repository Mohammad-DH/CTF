import React, { useContext } from "react";
import Box from "../components/Box";
import { Link } from "react-router-dom";

import { root } from "../context/API";

function Home() {
  const { change, help, about } = useContext(root);
  return (
    <div className="home">
      <div className="home-content">
        <img className="home-header" src="./ctf.svg" alt="" />

        <div className="home-options">
          <Link to="/terminal">start</Link>
          <span onClick={() => change("help", true)}>help</span>
          <span onClick={() => change("about", true)}>about</span>
        </div>
      </div>

      <Box
        state={help}
        title={"help"}
        content={[
          "cd ...................................... Change Directory",
          "ls ...................................... List Files and Directories ",
          "cat ...................................... Concatenate ",
          "ctr + l ...................................... Clear ",
          "help ...................................... Help ",
          "*************************************************",
          "take all the keys and put them together by their number",
          "key1+key2+key3 = password",
        ]}
      />
      <Box
        state={about}
        title={"about"}
        content={[
          "This is a CTF base on cryptography",
          "to test your basic skills",
          "but you should be careful",
          "do not let simplicity fools you !",
        ]}
      />

      <style jsx>{`
        .home {
          width: 99%;
          height: 100vh;
        }
        .home-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .home-header {
          width: 60%;
        }
        .home-options {
          margin-top: 1%;
          height: 22%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          color: white;
          font-size: 2.3rem;
        }
        .home-options span {
          cursor: pointer;
        }
        .home-options a {
          text-decoration: none;
          color: white;
        }
      `}</style>
    </div>
  );
}

export default Home;
