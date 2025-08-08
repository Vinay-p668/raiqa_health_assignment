import React, { useState, useEffect } from "react";

function List(props) {
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    const savedList = localStorage.getItem("numbers");
    if (savedList) {
      props.setNumbers(JSON.parse(savedList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("numbers", JSON.stringify(props.numbers));
  }, [props.numbers]);

  function sortList() {
    let newList = [...props.numbers];
    if (sortAsc) {
      newList.sort((a, b) => a - b);
    } else {
      newList.sort((a, b) => b - a);
    }
    props.setNumbers(newList);
    setSortAsc(!sortAsc);
  }

  function resetList() {
    props.setNumbers([]);
    localStorage.removeItem("numbers");
  }

  function getHighlightClass(num) {
    if (props.numbers.length === 0) return "";
    const max = Math.max(...props.numbers);
    const min = Math.min(...props.numbers);
    if (num === max && num === min) return "highlight-both";
    if (num === max) return "highlight-max";
    if (num === min) return "highlight-min";
    return "";
  }

  return (
    <div className="list">
      <div className="list-header">
        <h2>Number List</h2>
        <div className="button-group">
          <button className="btn btn-sort" onClick={sortList}>
            Sort {sortAsc ? "Descending" : "Ascending"}
          </button>
          <button className="btn btn-reset" onClick={resetList}>
            Reset
          </button>
        </div>
      </div>
      {props.numbers.length === 0 ? (
        <p className="empty-message">No numbers added.</p>
      ) : (
        <ul>
          {props.numbers.map((num, index) => (
            <li key={index} className={`list-item ${getHighlightClass(num)}`}>
              {num}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;