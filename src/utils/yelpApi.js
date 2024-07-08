const API_KEY = process.env.YELP_KEY;

export async function searchYelpAPI(searchObject) {
  try {
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?sort_by=${searchObject.sort_by}&term=${searchObject.term}&location=${searchObject.location}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
      }
    };
    const response = await fetch(url, options);
    const searchResults = await response.json();
    return searchResults;
  } catch (error) {
    console.log(`Error when trying to fetch from the server: ${error}`)
  }
}