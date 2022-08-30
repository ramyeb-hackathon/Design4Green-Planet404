import { h } from "preact";
import { useState } from "preact/hooks";

import style from "./card.css";
import { FooterWidget } from "./footerWidget";
import info from "./info.svg";
import { BestPracticeModal } from "./modal";

export const Card = ({ value, onClick }) => {
  const [categorie, etape] = [
    value.categorie.toLowerCase(),
    value.etape.toLowerCase(),
  ];

  const Linkablestyle = [
    { title: "n/a", namePublic: "Global", styleRefrence: style.global },
    {
      title: "acquisition",
      namePublic: "Acquisition",
      styleRefrence: style.acquisition,
    },
    {
      title: "conception",
      namePublic: "Conception",
      styleRefrence: style.conception,
    },
    {
      title: "réalisation",
      namePublic: "Réalisation",
      styleRefrence: style.realisation,
    },
    {
      title: "déploiement",
      namePublic: "Déploiement",
      styleRefrence: style.deploiement,
    },
    {
      title: "administration",
      namePublic: "Admninistration",
      styleRefrence: style.administration,
    },
    {
      title: "utilisation",
      namePublic: "Utilisation",
      styleRefrence: style.utilisation,
    },
    {
      title: "maintenance",
      namePublic: "Maintenance",
      styleRefrence: style.maintenance,
    },
    {
      title: "fin de vie",
      namePublic: "Fin de vie",
      styleRefrence: style.findevie,
    },
    {
      title: "revalorisation",
      namePublic: "Revalorisation",
      styleRefrence: style.revalorisation,
    },
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className={[
        style.container,
        value.incoutournable === "oui" ? style.incoutournable : "",
      ].join(" ")}
      onKeyDown={() => {}}
      role="presentation"
      onClick={() => value.incoutournable === "non" && onClick()}
      title={
        value.incoutournable === "oui"
          ? "Ceci est une best practice incontournable."
          : ""
      }
    >
      <div className={style.content}>{value.critere}</div>
      <div className={style.footerContainer}>
        <div className={style.widgetContainer}>
          {categorie && (
            <FooterWidget
              content={categorie}
              backgroundColor={style.categorie}
            />
          )}

          {Linkablestyle.findIndex((e) => e.title === etape.toLowerCase()) >=
          0 ? (
            <FooterWidget
              content={
                Linkablestyle[
                  Linkablestyle.findIndex(
                    (e) => e.title === etape.toLowerCase()
                  )
                ].namePublic
              }
              backgroundColor={
                Linkablestyle[
                  Linkablestyle.findIndex(
                    (e) => e.title === etape.toLowerCase()
                  )
                ].styleRefrence
              }
            />
          ) : (
            <FooterWidget
              content={Linkablestyle[0].namePublic}
              backgroundColor={Linkablestyle[0].styleRefrence}
            />
          )}
        </div>
        <img
          title={"Plus d'information"}
          style={`${style.info} infologo`}
          src={info}
          height={20}
          alt="modal info button"
          onKeyDown={() => {}}
          role="presentation"
          onClick={(event) => {
            event.stopImmediatePropagation();
            setShowModal(true);
          }}
        />
      </div>
      <BestPracticeModal
        isOpen={showModal}
        info={value}
        closeModal={() => setShowModal(false)}
      />
    </div>
  );
};
