import React, { useState } from "react";
import InputForm from "./components/InputForm";
import CategoryForm from "./components/CategoryForm";
import RankingForm from "./components/RankingForm";
import "./App.css";

function App() {
  const [programs, setPrograms] = useState([]);
  const [categories, setCategories] = useState([]);

  return (
    <div className="App">
      <h1>Program Ranking Tool</h1>
      <InputForm setPrograms={setPrograms} />
      <CategoryForm setCategories={setCategories} />
      {programs.length > 0 && categories.length > 0 && (
        <RankingForm programs={programs} categories={categories} />
      )}
    </div>
  );
}

export default App;
