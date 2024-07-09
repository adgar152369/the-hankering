const VITE_API_KEY = import.meta.env.VITE_YELP_API;

export async function searchYelpAPI(searchObject) {
  try {
    const url = `http://localhost:8080/yelp/businesses/search?sort_by=${searchObject.sort_by}&term=${searchObject.term}&location=${searchObject.location}`;
    const options = { headers: { Authorization: `Bearer ${VITE_API_KEY}` } }
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.description || 'Error fetching Yelp data.');
    }

    const searchResults = await response.json();
    return searchResults;
  } catch (error) {
    console.log(`Error when trying to fetch from the server: ${error}`);
    throw error;
  }
}