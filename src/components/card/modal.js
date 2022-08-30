import { h } from "preact";
import Modal from "react-modal";
import style from "./modal.css";

Modal.setAppElement("#app");

export const BestPracticeModal = ({ isOpen, info, closeModal }) => {
  return (
    <Modal isOpen={isOpen} className={style.modal}>
      <div className={style.container}>
        <div>
          <h2 className={style.name}>{info.ID}</h2>
          {info.etape.toLowerCase() === "n/a" ? "Global" : info.etape}
        </div>
        <p>{info.critere}</p>
        <p>
          {info.reco_cons === "RECO" ? "Recommendation" : "Conseil"}:{" "}
          {info.reco}
        </p>
        <p>Categorie: {info.categorie}</p>
        <p>Incontournable: {info.incoutournable === "oui" ? "Oui" : "Non"} </p>
        <p>Mot Clés: {info.key_word}</p>
        <button className={style.cancel} onClick={closeModal}>
          Fermer
        </button>
      </div>
    </Modal>
  );
};
