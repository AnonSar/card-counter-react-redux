import React, { Component } from "react";
import style from "./HomePage.module.scss";
import FooterComponent from "../../components/footer/footer";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className={style["main-div"]}>
          <div className={style["heading-div"]}>CARD COUNTER</div>
          <div className={style["info-div"]}>
            <div className={style["first"]}>
              Hi there, this website will help you in practising card counting and developing
              quick calculations skills for maintaining the current count.
            </div>
            <div className={style["second"]}>
              The method that has been used for calculating count is based on
              the Hi-Lo couting systems.
            </div>
          </div>
          <FooterComponent />
        </div>
      </>
    );
  }
}

export default HomePage;
