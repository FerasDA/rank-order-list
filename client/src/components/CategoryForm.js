import React, { useState } from 'react';

const CategoryForm = ({ setCategories }) => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryWeight, setCategoryWeight] = useState('');
  const [categories, setCategoryList] = useState([]);
  const [totalWeight, setTotalWeight] = useState(0);

  const addCategory = () => {
    const weight = parseFloat(categoryWeight);

    if (categoryName.trim() === '' || isNaN(weight) || weight <= 0) return;
    if (totalWeight + weight > 100) {
      alert('Total weight cannot exceed 100%');
      return;
    }

    const updatedCategories = [...categories, { name: categoryName, weight }];
    setCategoryList(updatedCategories);
    setCategories(updatedCategories); 
    setTotalWeight(totalWeight + weight);
    setCategoryName('');
    setCategoryWeight('');
  };

  const removeCategory = (index) => {
    const removedCategory = categories[index];
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategoryList(updatedCategories);
    setCategories(updatedCategories); 
    setTotalWeight(totalWeight - removedCategory.weight);
  };

  return (
    <div>
      <h2>Category Input</h2>
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Enter category name"
      />
      <input
        type="number"
        value={categoryWeight}
        onChange={(e) => setCategoryWeight(e.target.value)}
        placeholder="Enter weight (%)"
      />
      <button onClick={addCategory}>Add Category</button>

      <h3>Category List (Total Weight: {totalWeight}%)</h3>
      {totalWeight > 100 && <p style={{ color: 'red' }}>Total weight exceeds 100%!</p>}
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category.name} - {category.weight}%
            <button onClick={() => removeCategory(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryForm;