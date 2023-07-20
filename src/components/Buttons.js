import satData from "./satData";
import displaySats from "../App";
import filterByType from "../App";
import setSat from "../App";

function Buttons() {
  return (
      <div>
    {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))};
      <button onClick={() => setSat(satData)}>All Orbits</button>;
  </div>)
}

export default Buttons;