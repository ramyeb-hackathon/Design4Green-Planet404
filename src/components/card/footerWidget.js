import { h } from "preact";

import style from "./footerWidget.css";

export const FooterWidget = ({ content, backgroundColor }) => {
  return (
    <div className={`${style.tag} ${backgroundColor}`}>
      <p>{content}</p>
    </div>
  );
};
