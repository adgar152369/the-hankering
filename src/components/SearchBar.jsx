import { useState } from "react";
import styles from "./SearchBar.module.css";
import { searchYelpAPI } from "../utils/yelpApi";

export default function SearchBar(props) {
  const [sortBy, setSortBy] = useState('best_match');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const handleSortBy = ({ target }) => {
    setSortBy(() => {
      const newSortBy = target.value;
      props.onSearch({ sort_by: newSortBy, term: searchTerm, location: searchLocation });
      return newSortBy;
    });
    props.onSearch({ sort_by: sortBy, term: searchTerm, location: searchLocation });
  };

  const handleSearchTerm = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleSearchLocation = ({ target }) => {
    setSearchLocation(target.value);
  };

  const handleSearch = () => props.onSearch({ sort_by: sortBy, term: searchTerm, location: searchLocation });

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarContent}>
        <div className={styles.SearchBarSortByBtns}>
          <button
            className={`${styles.SearchBarSortByBtn} ${sortBy === 'best_match' ? styles.SearchBarSortByBtnActive : undefined}`}
            onClick={handleSortBy}
            value='best_match'>Best Match</button>
          <button
            className={`${styles.SearchBarSortByBtn} ${sortBy === 'rating' ? styles.SearchBarSortByBtnActive : undefined}`}
            onClick={handleSortBy}
            value='rating'>Highest Rated</button>
          <button
            className={`${styles.SearchBarSortByBtn} ${sortBy === 'review_count' ? styles.SearchBarSortByBtnActive : undefined}`}
            onClick={handleSortBy}
            value='review_count'>Most Reviewed</button>
        </div>
        <div className={styles.SearchBarInputs}>
          <input
            className={styles.SearchBarInput}
            onChange={handleSearchTerm}
            value={searchTerm}
            type="text"
            placeholder="Search Businesses" />
          <input
            className={styles.SearchBarInput}
            onChange={handleSearchLocation}
            value={searchLocation}
            type="text"
            placeholder="Where?" />
        </div>

        <button className={styles.SearchBarSubmitBtn} type="submit" onClick={handleSearch}>Find Food</button>
      </div>
    </div>
  )
}