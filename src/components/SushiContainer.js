import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi, sushiPage, setSushiPage, setEmptyPlates, emptyPlates, setUserBalance, userBalance}) {

  const displaySushi = sushi.map(sushi => <Sushi key={sushi.id} sushi={sushi} setEmptyPlates={setEmptyPlates} emptyPlates={emptyPlates} setUserBalance={setUserBalance} userBalance={userBalance} />)

  return (
    <div className="belt">
      {displaySushi}
      <MoreButton  sushiPage={sushiPage} setSushiPage={setSushiPage} />
    </div>
  );
}

export default SushiContainer;
