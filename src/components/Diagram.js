import DiagramBar from "./DiagramBar";

function Diagram(props) {
  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => {
        return (
          <DiagramBar
            key={dataSet.id}
            value={dataSet.value}
            maxValue={null}
            label={dataSet.label}
          />
        );
      })}
    </div>
  );
}

export default Diagram;
