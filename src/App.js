import "./App.css";
import Costs from "./components/Costs";
import NewCost from "./components/NewCost";

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Clock",
      amount: 311.99,
    },
    {
      date: new Date(2011, 12, 12),
      description: "jojo",
      amount: 31.19,
    },
    {
      date: new Date(2001, 5, 2),
      description: "Dog",
      amount: 11.99,
    },
  ];
  return (
    <div className="App">
      <NewCost />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
