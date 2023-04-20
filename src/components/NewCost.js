import { useState } from "react";
import CostForm from "./CostForm";

function NewCost(props) {
  const [isFormVisible, setFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
  };

  const inputConstDataHandler = () => {
    setFormVisible(true);
  };

  const cancelCostHandler = () => {
    setFormVisible(false);
  };

  return (
    <div className="new-cost">
      {isFormVisible === false ? (
        <button onClick={inputConstDataHandler}>Add new stuff</button>
      ) : (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostHandler}
        />
      )}
    </div>
  );
}

export default NewCost;
