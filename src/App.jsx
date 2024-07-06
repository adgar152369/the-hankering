import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import './App.css';
import { sampleBusinesses } from './sampleBusinessData';

function App() {

  return (
    <>
      <SearchBar />
      <BusinessList businesses={sampleBusinesses} />
    </>
  )
}

export default App
