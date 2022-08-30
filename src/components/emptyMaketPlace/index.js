import { h } from "preact";

import marketPlace from "./marketplace.svg";

import style from "./emptyMarketPlace.css";

export const EmptyMarket = () => {
  return (
    <div className={style.container}>
      <img src={marketPlace} className={style.icon} alt="bag icon" />
    </div>
  );
};
