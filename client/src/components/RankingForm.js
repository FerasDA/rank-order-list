import React, { useState, useEffect } from "react";
import "./RankingForm.css";

const RankingForm = ({ programs, categories }) => {
  const [rankings, setRankings] = useState({});
  const [overallScores, setOverallScores] = useState([]);

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

  useEffect(() => {
    const maxWeightedSum = categories.reduce((sum, category) => {
      return sum + programs.length * (category.weight / 100);
    }, 0);

    const scores = programs.map((_, programIndex) => {
      let weightedRankSum = 0;
      categories.forEach((category) => {
        const rank = rankings[category.name]?.[programIndex];
        if (rank !== null && !isNaN(rank)) {
          weightedRankSum += (rank / programs.length) * (category.weight / 100);
        }
      });
      const normalizedScore = (1 - weightedRankSum / maxWeightedSum) * 100;
      return { program: programs[programIndex], score: normalizedScore };
    });

    // Sort programs by score in descending order (higher is better)
    scores.sort((a, b) => b.score - a.score);
    setOverallScores(scores);
  }, [rankings, categories, programs]);

  return (
    <div className="container">
      <h2>Rank Programs by Category</h2>
      {categories.map((category, catIndex) => (
        <div key={catIndex} className="category">
          <h3>
            {category.name} (Weight: {category.weight}%)
          </h3>
          <ul>
            {programs.map((program, programIndex) => (
              <li key={programIndex}>
                {program} - Rank:
                <select
                  value={rankings[category.name]?.[programIndex] || ""}
                  onChange={(e) =>
                    handleRankChange(
                      category.name,
                      programIndex,
                      e.target.value
                    )
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

      <div className="overall-scores">
        <h2>Overall Scores (Out of 100)</h2>
        <ul>
          {overallScores.map((item, index) => (
            <li key={index}>
              {item.program}: {item.score.toFixed(2)}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RankingForm;
