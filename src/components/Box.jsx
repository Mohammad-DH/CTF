import { useContext } from "react";
import Draggable from "react-draggable";
import { root } from "../context/API";

function Box({ state, title, content }) {
  const { change } = useContext(root);

  return (
    <Draggable handle=".box-nav" bounds="parent">
      <div className={state === true ? "Box" : "Box hide"}>
        <div className="box-nav">
          <span onClick={() => change(title, false)} className="box-close">
            X
          </span>

          <span> {title} </span>
        </div>

        <div className="box-body">
          {content.map((e) => {
            return <p>{e}</p>;
          })}
        </div>

        <style jsx>{`
          .hide {
            display: none !important;
          }
          .Box {
            min-width: 10vw;
            max-width: 35vw;
            max-height: 50vh;
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
          }
          .Box div {
            width: 100%;
          }
          .box-nav {
            background-color: rgb(34, 34, 34) !important;
            color: rgb(214, 214, 214) !important;
            padding: 1% 5% !important;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: space-between;
          }
          .box-close {
            cursor: pointer;
          }
          .box-body {
            background-color: rgb(255, 255, 255) !important;
            color: rgb(61, 61, 61) !important;
            word-wrap: break-word;
            padding: 0 5%;
          }
        `}</style>
      </div>
    </Draggable>
  );
}

export default Box;
