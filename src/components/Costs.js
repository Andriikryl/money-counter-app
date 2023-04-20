import { useState } from "react";
import Card from "./Card";
import CostFilter from "./CostFilter";
import CostItem from "./CostItem";
import CostList from "./CostsList";

function Costs(props) {
  const [selectedYear, setSelecetedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelecetedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs-box">
        <CostFilter onChangeYear={yearChangeHandler} year={selectedYear} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
}

export default Costs;
