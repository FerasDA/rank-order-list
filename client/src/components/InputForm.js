import React, { useState } from 'react';

const InputForm = ({ setPrograms }) => {
  const [programName, setProgramName] = useState('');
  const [programList, setProgramList] = useState([]);

  const addProgram = () => {
    if (programName.trim() === '') return;
    const updatedList = [...programList, programName];
    setProgramList(updatedList);
    setPrograms(updatedList); 
    setProgramName('');
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
      <ul>
        {programList.map((program, index) => (
          <li key={index}>
            {program}{' '}
            <button onClick={() => removeProgram(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputForm;
