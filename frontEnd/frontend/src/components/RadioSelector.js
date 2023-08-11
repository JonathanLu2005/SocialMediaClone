import React, { useState } from "react";
import "../App.css";

function RadioSelector({ options, setSelected }) {
  const [selected, setSelectedLoc] = useState();
  return (
    <div className="dimSelector">
      {/* <p>{selected}</p> */}
      {options.map((value, index) => {
        // console.log(index, value);
        return (
          <p
            style={{ paddingRight: "30px" }}
            onClick={() => {
              setSelectedLoc(index);
              setSelected(index);
            }}
          >
            {value}
          </p>
        );
      })}
    </div>
  );
}

export default RadioSelector;
