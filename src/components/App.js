import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";


function App() {
  
  const [sushi, setSushi] = useState([])
  const [sushiPage, setSushiPage] = useState(1)
  const [emptyPlates, setEmptyPlates] = useState([])
  const [userBalance, setUserBalance] = useState(300)

  //when sushi button is clicked
    //subract the price of the fish from the userBalance using setUserBalance
    //add one element to emptyPlates using setEmptyPlates

  useEffect(() => {

    let API = `http://localhost:3001/sushis/?_limit=4&_page=${sushiPage}`;

    fetch(API)
    .then(r => r.json())
    .then(sushiList => setSushi(sushiList))
  }, [sushiPage])
  
  return (
    <div className="app">
      <SushiContainer setUserBalance={setUserBalance} userBalance={userBalance} emptyPlates={emptyPlates} setEmptyPlates={setEmptyPlates} sushi={sushi} sushiPage={sushiPage} setSushiPage={setSushiPage} />
      <Table plates={emptyPlates} userBalance={userBalance} />
    </div>
  );
}

export default App;
