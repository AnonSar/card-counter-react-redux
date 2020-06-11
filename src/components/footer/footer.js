import React from "react";
import style from "./footer.module.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterComponent = (props) => {
  const codedSymbol = "</>";
  return (
    <div className={style["main-div"]}>
      <span className={style["content"]}>
        {" "}
        {codedSymbol} by {" "}
        <a href="https://github.com/AnonSar" target="_blank" rel="noopener noreferrer"> 
          AnonSar <FontAwesomeIcon icon={faGithub} />{" "}
        </a>
      </span>
    </div>
  );
};

export default FooterComponent;
