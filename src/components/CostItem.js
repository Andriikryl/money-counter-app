import CostDate from "./CostDate";

function CostItem(props) {
  return (
    <div className="costitem">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{props.description}</h2>
        <p className="item-price">${props.amount}</p>
      </div>
    </div>
  );
}

export default CostItem;
