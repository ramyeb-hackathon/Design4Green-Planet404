import { h } from "preact";
import { useSpring, animated } from "react-spring";

import { useState } from "preact/hooks";

import { BPList } from "../../components/bestPracticesList";
import { Cart } from "../../components/cart";
import { Roadmap } from "../../components/roadmap";
import { getData } from "../../service/dataSource";
import style from "./style.css";
import { EmptyMarket } from "../../components/emptyMaketPlace";

const Home = () => {
  const data = getData();

  const [itemIntoMarket, setItemIntoMarket] = useState(
    data.filter((bp) => bp.incoutournable === "non")
  );

  const [selectedItems, setSelectedItems] = useState(
    data.filter((bp) => bp.incoutournable === "oui")
  );

  const [openRoadmap, setOpenRoadmap] = useState(false);

  const handleAddItem = (newItem) => {
    if (selectedItems.every((item) => item.ID !== newItem.ID)) {
      setSelectedItems([newItem, ...selectedItems]);
    }
    setItemIntoMarket(itemIntoMarket.filter((el) => el.ID !== newItem.ID));
  };

  const deleteFromSelectedList = (newItem) => {
    if (itemIntoMarket.every((item) => item.ID !== newItem.ID)) {
      setItemIntoMarket([newItem, ...itemIntoMarket]);
    }
    setSelectedItems(selectedItems.filter((el) => el.ID !== newItem.ID));
  };

  const marketPlaceStyles = useSpring({
    flex: openRoadmap ? 0 : 1,
  });

  const roadmapStyles = useSpring({
    flex: openRoadmap ? 1 : 0,
  });

  return (
    <div class={style.home}>
      <animated.div
        style={marketPlaceStyles}
        onClick={() => setOpenRoadmap(false)}
      >
        {openRoadmap ? (
          <EmptyMarket />
        ) : (
          <BPList list={itemIntoMarket} action={handleAddItem} />
        )}
      </animated.div>
      <Cart selectedItems={selectedItems} action={deleteFromSelectedList} />
      <animated.div style={roadmapStyles} onClick={() => setOpenRoadmap(true)}>
        <Roadmap selectedItems={selectedItems} isRoadmapOpen={openRoadmap} />
      </animated.div>
    </div>
  );
};

export default Home;
