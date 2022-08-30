import { h } from "preact";

import { animated, useSpring } from "react-spring";
import style from "./bigRoadmap.css";
import { RoadMapButton } from "../roadmapButton";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

export const BigRoadmap = ({ obj, isRoadMapOpen }) => {
  const styles = useSpring({
    width: isRoadMapOpen ? "80%" : "0%",
  });

  const buttonStyle = useSpring({
    from: { width: "0%" },
    to: { width: "20%" },
  });

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

  const generatePDF = () => {
    const doc = new jsPDF();
    obj.forEach((step) => {
      if (step.items.length > 0) {
        doc.autoTable({
          styles: { halign: "center" },
          head: [
            [
              "Etape",
              "Critere",
              "Categorie",
              "Incontournable",
              "Recommendation",
            ],
          ],
          body: step.items.map((item) => [
            step.displayTitle,
            item.critere,
            item.categorie.toLowerCase(),
            item.incoutournable === "oui" ? "Oui" : "Non",
            item.reco,
          ]),
        });
      }
    });

    doc.save("roadmap.pdf");
  };

  return (
    <div
      className={[
        style.roadmapContainer,
        style.wrappedContainer,
        "lgroadmap",
      ].join(" ")}
    >
      <h1 className={style.title}>Roadmap</h1>
      <p className={style.subtitle}>
        Rendez-vous en bas de page pour génerer votre feuille de route !
      </p>

      <animated.div style={styles} className={style.verticalContainer}>
        {obj.map((card, i) => {
          return (
            <div key={i} className={style.verticalItem}>
              <RoadMapButton
                items={card.items}
                title={card.displayTitle}
                colorBorder={stylesBorder[i]}
              />
              {i < obj.length - 1 && <div className={style.verticalLine} />}
            </div>
          );
        })}
      </animated.div>
      <animated.button
        style={buttonStyle}
        className={style.generate}
        onClick={generatePDF}
      >
        Télécharger votre feuille de route
      </animated.button>
    </div>
  );
};
