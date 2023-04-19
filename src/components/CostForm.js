function CostForm() {
  return (
    <form className="new-cost__form">
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="new-cost__control">
          <label>Sum</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input type="date" min="2010-01-01" step="2023-12-31" />
        </div>
        <div className="new-cost__actions">
          <button className="new-cost__add" type="submit">
            Add
          </button>
          <button className="new-sot-cancel">cancel</button>
        </div>
      </div>
    </form>
  );
}

export default CostForm;
