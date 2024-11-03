import React, { useState, useEffect } from 'react';

const RankingForm = ({ programs, categories }) => {
  const [rankings, setRankings] = useState({});

  useEffect(() => {
    const initialRankings = {};
    categories.forEach((category) => {
      initialRankings[category.name] = programs.map(() => null); 
    });
    setRankings(initialRankings);
  }, [programs, categories]);

  const handleRankChange = (category, programIndex, rank) => {
    const updatedRankings = { ...rankings };
    updatedRankings[category][programIndex] = parseInt(rank, 10);
    setRankings(updatedRankings);
  };

  return (
    <div>
      <h2>Rank Programs by Category</h2>
      {categories.map((category, catIndex) => (
        <div key={catIndex}>
          <h3>{category.name} (Weight: {category.weight}%)</h3>
          <ul>
            {programs.map((program, programIndex) => (
              <li key={programIndex}>
                {program} - Rank:
                <select
                  value={rankings[category.name]?.[programIndex] || ''}
                  onChange={(e) =>
                    handleRankChange(category.name, programIndex, e.target.value)
                  }
                >
                  <option value="">Select Rank</option>
                  {programs.map((_, rankIndex) => (
                    <option key={rankIndex} value={rankIndex + 1}>
                      {rankIndex + 1}
                    </option>
                  ))}
                </select>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RankingForm;
