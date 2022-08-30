import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import style from "./cart.css";

import panier from "./cart.svg";
import { Card } from "../card";

export const Cart = ({ selectedItems, action }) => {
  const [cartItems, setCartItems] = useState(selectedItems);
  useEffect(() => {
    setCartItems(selectedItems);
  }, [selectedItems]);

  return (
    <div className={style.container}>
      <div className={style.cartHeader}>
        <p className={style.title}>Ton Panier</p>
        <div className={style.lineHorizontal} />
        <img className={style.image} src={panier} alt="panier" />
      </div>
      <div className={style.cardContainer}>
        {cartItems.map((item, i) => (
          <div
            key={i}
            className={style.card}
            onClick={() => item.incoutournable === "non" && action(item)}
            role="presentation"
          >
            <Card value={item} />
          </div>
        ))}
        {cartItems.length > 0 ? null : (
          <p className={style.text}>Votre panier est vide !</p>
        )}
      </div>
    </div>
  );
};
