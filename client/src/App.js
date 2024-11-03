import React, { useState } from "react";
import Explanation from "./components/Explanation";
import InputForm from "./components/InputForm";
import CategoryForm from "./components/CategoryForm";
import RankingForm from "./components/RankingForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [programs, setPrograms] = useState([]);
  const [categories, setCategories] = useState([]);

  return (
    <div className="App">
      <h1>Order List Ranking Tool</h1>
      <Explanation />
      <InputForm setPrograms={setPrograms} />
      <CategoryForm setCategories={setCategories} />
      {programs.length > 0 && categories.length > 0 && (
        <RankingForm programs={programs} categories={categories} />
      )}
      <Footer />
    </div>
  );
}

export default App;
