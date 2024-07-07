const API_KEY = '_QhPyUAEFc-CfwyBJP63T-rUG3EGn-XHFX1hMha5vTpA810Mh0lrIuCMBpds36cXmeLwrhLCjLgakoOwcxfSm4wD_4FDk-ST1sngb3b1BqBAzz4aTChaK3fWzMyJZnYx';

export async function searchYelpAPI(searchObject) {
  const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?sort_by=${searchObject.sort_by}&term=${searchObject.term}&location=${searchObject.location}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  }

  const response = await fetch(url, options);
  const searchResults = await response.json();
  return searchResults;
}