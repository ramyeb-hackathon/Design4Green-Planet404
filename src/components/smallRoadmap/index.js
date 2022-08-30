import { h } from "preact";
import style from "./smallRoadmap.css";
import arrowSVG from "./arrow.svg";

export const SmallRoadmap = ({ obj }) => {
  const stylesBorder = [
    style.global,
    style.acquisition,
    style.conception,
    style.realisation,
    style.deploiement,
    style.administration,
    style.utilisation,
    style.maintenance,
    style.findevie,
    style.revalorisation,
  ];

  return (
    <div className={[style.roadmapContainer].join(" ")}>
      <div className={style.buttonIndication}>
        <img src={arrowSVG} className={style.icon} alt="go back arrrow" />
      </div>
      {obj.map((card, i) => (
        <div key={i} className={style.verticalItem}>
          <div className={`${style.bubble} ${stylesBorder[i]}`}>
            <p className={style.counter}>{card.items.length}</p>
          </div>
          {i < obj.length - 1 && <div className={style.verticalLine} />}
        </div>
      ))}
    </div>
  );
};
