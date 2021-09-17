import React from "react";

function MoreButton({sushiPage, setSushiPage}) {
  return <button onClick={() => setSushiPage(sushiPage + 1)}>More sushi!</button>;
}

export default MoreButton;
