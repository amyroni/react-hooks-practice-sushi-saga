import React from "react";

function Sushi({ money, eaten, sushi, onEatSushi }) {
  function handleClick() {
    if (money >= sushi.price) {
      onEatSushi(sushi)
    } else {
      alert("Not enough money!")
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {(eaten.find(eatenSushi => eatenSushi.id === sushi.id )) ? 
          null : (
          <img
            src={null}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
