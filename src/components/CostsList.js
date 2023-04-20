import CostItem from "./CostItem";

function CostList(props) {
  if (props.costs.length === 0) {
    return <h2 className="cost-list__fallback">Zero items in thies year</h2>;
  }

  return (
    <ul className="cost-list">
      {props.costs.map((cost) => {
        return (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        );
      })}
      ;
    </ul>
  );
}

export default CostList;
