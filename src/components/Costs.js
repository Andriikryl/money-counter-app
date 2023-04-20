import { useState } from "react";
import Card from "./Card";
import CostFilter from "./CostFilter";
import CostItem from "./CostItem";

function Costs(props) {
  const [selectedYear, setSelectdYear] = useState("2019");

  const yearChangeHandler = (year) => {
    selectedYear(year);
  };
  return (
    <div>
      <CostFilter onChangeYear={yearChangeHandler} year={selectedYear} />
      <Card className="costs-box">
        <CostItem
          date={props.costs[0].date}
          description={props.costs[0].description}
          amount={props.costs[0].amount}
        />
        <CostItem
          date={props.costs[1].date}
          description={props.costs[1].description}
          amount={props.costs[1].amount}
        />
        <CostItem
          date={props.costs[2].date}
          description={props.costs[2].description}
          amount={props.costs[2].amount}
        />
      </Card>
    </div>
  );
}

export default Costs;
