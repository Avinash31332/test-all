import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function GotoButton(props) {
  const [hover, setHover] = useState(false);
  function mouseEnter() {
    setHover(true);
  }
  function mouseLeave() {
    setHover(false);
  }
  return (
    <button
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className="gotoBtn"
    >
      {props.title} <span> </span>
      <span className={hover ? "arrow-visible" : "arrow-hidden"}>
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </button>
  );
}

export default GotoButton;
