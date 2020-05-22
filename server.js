const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TODO: implement real login
app.get('/api/isLoggedIn', (req, res) => {
  res.send({ isLoggedIn: true });
});

// TODO: change with real stock code
app.get('/api/fetchStockData', (req, res) => {
  let result = [];
  const params = [1,2,3];
  const apiBaseUrl = process.env.STOCK_API_BASE_URL;

  params.forEach((param) => {
    result.push(getData(`${apiBaseUrl}/people/${param}`));
  });

  Promise.all(result).then(allData => {
    return res.send({ data: allData });
  })
})

function getData(url) {
  return new Promise((resolve) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
          resolve(data)
        });
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`));