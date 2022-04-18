import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Developer"],
      });
    }, []);



  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="	https://i.imgur.com/u2ZoNgg.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Pratik Munjamkar</h1>
          <h3>
            FULLSTACK & MERN  <span  ref={textRef}></span>
          </h3>
        </div>
        <a href="#about">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}