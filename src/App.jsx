import { useState } from 'react';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import { searchYelpAPI } from './utils/yelpApi';
import './App.css';

function App() {
  const [searchTerms, setSearchTerms] = useState({
    sort_by: '',
    term: '',
    location: ''
  });
  const [businesses, setBusinesses] = useState({});

  async function handleSearchTerms(obj) {
    const newSearch = {
      sort_by: obj.sort_by,
      term: obj.term,
      location: obj.location
    };
    setSearchTerms(newSearch);

    try {
      const results = await searchYelpAPI(newSearch);
      setBusinesses(results);
    } catch (error) {
      console.log(`Error fetching Yelp results: ${error}`);
    }
  }

  return (
    <>
      <SearchBar onSearch={handleSearchTerms} />
      {Object.keys(businesses).length > 0 ?
        <BusinessList businesses={businesses} /> :
        null}
    </>
  )
}

export default App
