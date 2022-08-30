import { h } from "preact";
import { useState } from "preact/hooks";
import { Card } from "../card";
import { animated } from "react-spring";

import style from "./button.css";

export const RoadMapButton = ({ items, title, colorBorder }) => {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <animated.div
      className={[
        colorBorder,
        style.largeBubble,
        isExtended && items.length > 0 ? style.extended : "",
      ].join(" ")}
      onClick={() => setIsExtended(!isExtended)}
    >
      <div className={[style.title].join(" ")}>
        {title} - {items.length}
      </div>
      {isExtended && items.length > 0 ? (
        <div className={style.buttonCardContainer}>
          {items.map((item, i) => (
            <Card value={item} onClick={() => {}} key={i} />
          ))}
        </div>
      ) : null}
    </animated.div>
  );
};
