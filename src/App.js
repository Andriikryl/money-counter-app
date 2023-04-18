import "./App.css";
import CostItem from "./components/CostItem";

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
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      />
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      />
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      />
    </div>
  );
}

export default App;
