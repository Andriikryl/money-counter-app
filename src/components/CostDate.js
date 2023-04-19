function CostDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
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
  );
}

export default CostDate;
