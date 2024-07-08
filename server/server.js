const dotenv = require('dotenv');
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());

app.get('/yelp/businesses/search', async (req, res) => {
  const { sort_by, term, location } = req.query;
  const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sort_by}`;
  const options = {
    header: {
      Authorization: `Bearer ${process.env.YELP_API}`
    }
  }

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});