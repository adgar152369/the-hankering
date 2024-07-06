import { useState } from "react"

export default function SearchBar() {
  const [sortBy, setSortBy] = useState({sort_by: 'best_match'});

  function handleSortBy(e) {
    setSortBy({sort_by: e.target.value});
  }

  return (
    <>
      <div>
        <button onClick={handleSortBy} value='best_match'>Best Match</button>
        <button onClick={handleSortBy} value='rating'>Highest Rated</button>
        <button onClick={handleSortBy} value='review_count'>Most Reviewed</button>

        <input type="text" placeholder="Search Businesses" />
        <input type="text" placeholder="Where?"/>
      </div>
    </>
  )
}