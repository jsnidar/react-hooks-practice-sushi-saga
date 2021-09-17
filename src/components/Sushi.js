import React, {useState} from "react";

function Sushi({sushi, setEmptyPlates, emptyPlates, userBalance, setUserBalance}) {

const [isEaten, setIsEaten] = useState(false)

const handleSushiClick = (e) => {
    //if statement here to verify the user has enough money in their account to purchase the selected sushi
  if(userBalance >= sushi.price) {
    //subtract the price of the fish from the userBalance using setUserBalance
    setUserBalance(userBalance - sushi.price)
    //add one element to emptyPlates using setEmptyPlates
    setEmptyPlates([...emptyPlates, 'a'])
    setIsEaten(true)
  }
  


}
  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {isEaten ? null : (
          <img
            src={sushi['img_url']}
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
