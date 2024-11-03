import React, { useState } from "react";
import "./InputForm.css";

const InputForm = ({ setPrograms }) => {
  const [programName, setProgramName] = useState("");
  const [programList, setProgramList] = useState([]);

  const addProgram = () => {
    if (programName.trim() === "") return;
    const updatedList = [...programList, programName];
    setProgramList(updatedList);
    setPrograms(updatedList);
    setProgramName("");
  };

  const removeProgram = (index) => {
    const updatedList = programList.filter((_, i) => i !== index);
    setProgramList(updatedList);
    setPrograms(updatedList);
  };

  return (
    <div>
      <h2>Program Input</h2>
      <input
        type="text"
        value={programName}
        onChange={(e) => setProgramName(e.target.value)}
        placeholder="Enter program name"
      />
      <button onClick={addProgram}>Add Program</button>

      <h3>Program List</h3>
      <ul className="program-list">
        {programList.map((program, index) => (
          <li className="program-item" key={index}>
            {program}{" "}
            <button
              className="remove-button"
              onClick={() => removeProgram(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputForm;
