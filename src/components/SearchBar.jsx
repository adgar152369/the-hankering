import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [sortBy, setSortBy] = useState('best_match');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');


  function handleSortBy({ target }) {
    setSortBy(target.value);
  }

  console.log(sortBy === 'best_match')

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarContent}>
        <div className={styles.SearchBarSortByBtns}>
          <button
            className={
              `${styles.SearchBarSortByBtn} 
              ${sortBy === 'best_match' ? styles.SearchBarSortByBtnActive : undefined}`
            }
            onClick={handleSortBy}
            value='best_match'>Best Match</button>
          <button
            className={
              `${styles.SearchBarSortByBtn} 
              ${sortBy === 'rating' ? styles.SearchBarSortByBtnActive : undefined}`
            }
            onClick={handleSortBy}
            value='rating'>Highest Rated</button>
          <button
            className={
              `${styles.SearchBarSortByBtn} 
              ${sortBy === 'review_count' ? styles.SearchBarSortByBtnActive : undefined}`
            }
            onClick={handleSortBy}
            value='review_count'>Most Reviewed</button>
        </div>
        <div className={styles.SearchBarInputs}>
          <input className={styles.SearchBarInput} type="text" placeholder="Search Businesses" />
          <input className={styles.SearchBarInput} type="text" placeholder="Where?" />
        </div>
      </div>
    </div>
  )
}