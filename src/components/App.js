import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [page, setPage] = useState(2);
  const [eaten, setEaten] = useState([]);
  const [money, setMoney] = useState(100);

  useEffect(() => {
    fetch("http://localhost:3001/sushis?_limit=4&_page=1")
      .then(response => response.json())
      .then(sushi => setSushis(sushi))
  }, [])
  
  function handleMoreSushiClick() {
    console.log(page);
    fetch(`http://localhost:3001/sushis?_limit=4&_page=${page}`)
      .then(response => response.json())
      .then(sushi => {
        setSushis(sushi);
        setPage(page + 1);
      })
  }

  function handleEatSushi(sushi) {
    setEaten([...eaten, sushi]);
    setMoney(money - sushi.price);
  }

  return (
    <div className="app">
      <SushiContainer 
        money={money}
        eaten={eaten}
        sushis={sushis} 
        onMoreSushiClick={handleMoreSushiClick} 
        onEatSushi={handleEatSushi}
      />
      <Table eaten={eaten} money={money} />
    </div>
  );
}

export default App;
