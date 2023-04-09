import React from "react";
import "./sortingSelect.css";

function SortingSelect({ setSortCriteria }) {
  const handleClick = (criteria) => {
    setSortCriteria(criteria);
  };

  return (
    <div className="middle">
      <button onClick={() => handleClick("title")} className="btnn btn1">
        Title
      </button>
      <button onClick={() => handleClick("date")} className="btnn btn1">
        Date
      </button>
      <button onClick={() => handleClick("popularity")} className="btnn btn1">
        Popularity
      </button>
    </div>
  );
}

export default SortingSelect;
