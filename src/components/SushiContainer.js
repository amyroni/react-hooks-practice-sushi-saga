import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ money, eaten, sushis, onMoreSushiClick, onEatSushi}) {
  const sushiArray = sushis.map(sushi => {
    return <Sushi key={sushi.id} money={money} eaten={eaten} sushi={sushi} onEatSushi={onEatSushi} />
  })
  return (
    <div className="belt">
      {sushiArray}
      <MoreButton onMoreSushiClick={onMoreSushiClick} />
    </div>
  );
}

export default SushiContainer;
