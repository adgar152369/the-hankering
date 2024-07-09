import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

dotenv.config();

const app = express();

app.use(cors());

app.get('/yelp/businesses/search', async (req, res) => {

  try {
    const { sort_by, term, location } = req.query;
    console.log(sort_by, term, location);
    const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sort_by}`;
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.VITE_YELP_API}`
      }
    }
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