import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import SortingSelect from "./SortingSelect";
import ItemListElement from "./ItemListElement";
import "./ItemList.css";

function ItemList({ items }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState("title");

  // Check if items is defined
  if (!items) {
    return null;
  }

  // Filter the list of items based on the search query
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort the list of items based on the selected criteria
  const sortedItems = filteredItems.slice().sort((a, b) => {
    if (sortCriteria === "title") {
      if (a.title === b.title) {
        return a.id - b.id; // sort by id in ascending order if titles are the same
      } else {
        return a.title.localeCompare(b.title);
      }
    } else if (sortCriteria === "date") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortCriteria === "popularity") {
      return b.popularity - a.popularity;
    } else {
      return 0;
    }
  });

  // Motion animation variants for each item
  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 100, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <h1>List Of Famous Sports</h1>
      <div className="box">
        {/* Search input */}
        <div className="container">
          <input
            type="text"
            className="input"
            name=""
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search items..."
          />
          <a href="#" className="btn">
            <i className="fas fa-search"></i>
          </a>
        </div>

        {/* Sort select */}
        <SortingSelect
          className="sort"
          // sortCriteria={sortCriteria}
          setSortCriteria={setSortCriteria}
        />
      </div>

      {/* Item list */}
      <div className="animationAdd">
        {sortedItems.map((item) => (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key={item.id}
          >
            <ItemListElement item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
