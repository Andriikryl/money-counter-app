import Card from "./Card";
import CostDate from "./CostDate";

function CostItem(props) {
  return (
    <li>
      <Card className="costitem">
        <CostDate date={props.date} />
        <div className="cost-item__description">
          <h2>{props.description}</h2>
          <p className="item-price">${props.amount}</p>
        </div>
      </Card>
    </li>
  );
}

export default CostItem;
