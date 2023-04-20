import "./App.css";
import Costs from "./components/Costs";
import NewCost from "./components/NewCost";

function App() {
  const costs = [
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

  const addCostHandler = (cost) => {};

  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
