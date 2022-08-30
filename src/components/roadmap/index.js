import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import { BigRoadmap } from "../bigRoadmap";
import { SmallRoadmap } from "../smallRoadmap";

export const Roadmap = ({ selectedItems, isRoadmapOpen }) => {
  const [obj, setObj] = useState([
    { title: "global", displayTitle: "Global", items: [] },
    { title: "acquisition", displayTitle: "Acquisition", items: [] },
    { title: "conception", displayTitle: "Conception", items: [] },
    { title: "réalisation", displayTitle: "Réalisation", items: [] },
    { title: "déploiement", displayTitle: "Déploiement", items: [] },
    { title: "administration", displayTitle: "Admninistration", items: [] },
    { title: "utilisation", displayTitle: "Utilisation", items: [] },
    { title: "maintenance", displayTitle: "Maintenance", items: [] },
    { title: "findevie", displayTitle: "Fin de vie", items: [] },
    { title: "revalorisation", displayTitle: "Revalorisation", items: [] },
  ]);

  useEffect(() => {
    const newObj = [
      { title: "global", displayTitle: "Global", items: [] },
      { title: "acquisition", displayTitle: "Acquisition", items: [] },
      { title: "conception", displayTitle: "Conception", items: [] },
      { title: "réalisation", displayTitle: "Réalisation", items: [] },
      { title: "déploiement", displayTitle: "Déploiement", items: [] },
      { title: "administration", displayTitle: "Admninistration", items: [] },
      { title: "utilisation", displayTitle: "Utilisation", items: [] },
      { title: "maintenance", displayTitle: "Maintenance", items: [] },
      { title: "findevie", displayTitle: "Fin de vie", items: [] },
      { title: "revalorisation", displayTitle: "Revalorisation", items: [] },
    ];

    selectedItems.forEach((item) => {
      const index = newObj.findIndex(
        (_item) => _item.title === item.etape.toLowerCase().replace(/ /g, "")
      );

      if (index === -1) {
        newObj[0].items.push(item);
      } else {
        newObj[index].items.push(item);
      }
    });

    setObj(newObj);
  }, [selectedItems]);

  return isRoadmapOpen ? (
    <BigRoadmap obj={obj} isRoadMapOpen={isRoadmapOpen} />
  ) : (
    <SmallRoadmap obj={obj} />
  );
};
