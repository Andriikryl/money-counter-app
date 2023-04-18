function CostItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="costitem">
      <div className="costitem-date">
        <div>
          <p>{month}</p>
        </div>
        <div>
          <p>{year}</p>
        </div>
        <div>
          <p>{day}</p>
        </div>
      </div>
      <div className="cost-item__description">
        <h2>{props.description}</h2>
        <p className="item-price">${props.amount}</p>
      </div>
    </div>
  );
}

export default CostItem;
