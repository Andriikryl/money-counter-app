import { useState } from "react";
import "./App.css";
import Costs from "./components/Costs";
import NewCost from "./components/NewCost";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Clock",
    amount: 311.99,
  },
  {
    id: "c2",
    date: new Date(2011, 12, 12),
    description: "jojo",
    amount: 31.19,
  },
  {
    id: "c3",
    date: new Date(2001, 5, 2),
    description: "Dog",
    amount: 11.99,
  },
];
function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
