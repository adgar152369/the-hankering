import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [sortBy, setSortBy] = useState({ sort_by: 'best_match' });

  function handleSortBy(e) {
    setSortBy({ sort_by: e.target.value });
  }

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarContent}>
        <div className={styles.SearchBarSortByBtns}>
          <button onClick={handleSortBy} value='best_match'>Best Match</button>
          <button onClick={handleSortBy} value='rating'>Highest Rated</button>
          <button onClick={handleSortBy} value='review_count'>Most Reviewed</button>
        </div>
        <div className={styles.SearchBarInputs}>
          <input className={styles.SearchBarInput} type="text" placeholder="Search Businesses" />
          <input className={styles.SearchBarInput} type="text" placeholder="Where?" />
        </div>
      </div>
    </div>
  )
}