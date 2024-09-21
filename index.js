const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

// Endpoint 1: Calculate the Returns of the Stocks added
app.get('/calculate-returns', (req, res) => {
  const boughtAt = Number(req.query.boughtAt);
  const marketPrice = Number(req.query.marketPrice);
  const quantity = Number(req.query.quantity);

  const result = (marketPrice - boughtAt) * quantity;

  res.send(result.toString());
});

// Endpoint 2: Calculate the Total Returns
app.get('/total-returns', (req, res) => {
  const stock1 = Number(req.query.stock1);
  const stock2 = Number(req.query.stock2);
  const stock3 = Number(req.query.stock3);
  const stock4 = Number(req.query.stock4);

  const result = stock1 + stock2 + stock3 + stock4;

  res.send(result.toString());
});

// Endpoint 3: Calculate the Return Percentage
app.get('/calculate-return-percentage', (req, res) => {
  const boughtAt = Number(req.query.boughtAt);
  const returns = Number(req.query.returns);

  const result = (returns / boughtAt) * 100;

  res.send(result.toString());
});

// Endpoint 4: Calculate the Total Return Percentage
app.get('/total-return-percentage', (req, res) => {
  const stock1 = Number(req.query.stock1);
  const stock2 = Number(req.query.stock2);
  const stock3 = Number(req.query.stock3);
  const stock4 = Number(req.query.stock4);

  const result = stock1 + stock2 + stock3 + stock4;

  res.send(result.toString());
});

// Endpoint 5: Identify the Status of Stocks based on their Return Value
app.get('/status', (req, res) => {
  const returnPercentage = Number(req.query.returnPercentage);
  let result;

  if (returnPercentage > 0) {
    result = 'profit';
  } else {
    result = 'loss';
  }

  res.send(result);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
