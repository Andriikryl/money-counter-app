import { useState } from "react";
import Card from "./Card";
import CostDate from "./CostDate";

function CostItem(props) {
  const [description, setDescription] = useState(props.description);

  const changeDescriptionHandler = () => {
    setDescription("new tesxt");
  };

  return (
    <Card className="costitem">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <p className="item-price">${props.amount}</p>
      </div>
      <button onClick={changeDescriptionHandler}>change-descriton</button>
    </Card>
  );
}

export default CostItem;
