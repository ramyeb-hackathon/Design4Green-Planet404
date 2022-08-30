import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { animated, useSpring } from "react-spring";

import { Card } from "../card";

import filterSVG from "./filter.svg";

import style from "./bestPracticesList.css";
import { NavFilter } from "../navFilter";

export const BPList = ({ list, action }) => {
  const [search, setSearch] = useState("");
  const [cardList, setCardList] = useState(list);
  const [activeCategories, setActiveCategories] = useState([]);
  const [navLinkVisible, setNavlinkVisible] = useState(false);

  const styles = useSpring({
    opacity: navLinkVisible ? 1 : 0,
    visibility: navLinkVisible ? "visible" : "hidden",
    height: navLinkVisible ? "45px" : "0px",
  });

  useEffect(() => {
    setNavlinkVisible(true);
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      const newList = list.filter((element) => {
        return (
          element.critere.toLowerCase().includes(search.toLocaleLowerCase()) ||
          element.categorie
            .toLowerCase()
            .includes(search.toLocaleLowerCase()) ||
          element.etape.toLowerCase().includes(search.toLocaleLowerCase())
        );
      });

      if (activeCategories.length > 0) {
        setCardList(
          newList.filter((item) =>
            activeCategories.includes(item.categorie.toLowerCase())
          )
        );
      } else {
        setCardList(newList);
      }
    }
  }, [search, activeCategories, list]);

  const handleNavFilterClick = (clickedCategorie) => {
    if (activeCategories.includes(clickedCategorie)) {
      setActiveCategories(
        activeCategories.filter((categorie) => categorie !== clickedCategorie)
      );
    } else {
      setActiveCategories([...activeCategories, clickedCategorie]);
    }
  };

  useEffect(() => {
    if (activeCategories.length > 0) {
      const newList = list.filter((item) =>
        activeCategories.includes(item.categorie.toLocaleLowerCase())
      );

      setCardList(newList);
    } else {
      setCardList(list);
    }
  }, [activeCategories, list]);

  const handleClick = (element) => {
    action(element);
  };

  return (
    <div className={style.root}>
      <div className={style.header}>
        <div className={style.searchbarContainer}>
          <label className={style.label} htmlFor="search">
            .
          </label>
          <input
            id="search"
            className={style.searchBar}
            onInput={(event) => setSearch(event.target.value)}
            placeholder="Rechercher..."
          />

          <div
            role="button"
            tabIndex={0}
            className={`${style.filterContainer} filterContainer ${
              navLinkVisible ? style.active : ""
            }`}
            onClick={() => setNavlinkVisible(!navLinkVisible)}
            onKeyPress={() => {}}
          >
            <img
              src={filterSVG}
              className={style.filterIcon}
              alt="filterlogo"
            />
          </div>
        </div>
        <animated.div className={style.filterContainerAnimation} style={styles}>
          <NavFilter
            onClick={handleNavFilterClick}
            activeCategories={activeCategories}
            isVisible={navLinkVisible}
          />
        </animated.div>
      </div>
      <div className={style.listContainer}>
        <div className={style.cardList}>
          {cardList.map((element, i) => (
            <Card
              value={element}
              onClick={() => handleClick(element)}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
