const { calculateProfitOrLoss } = require('./calc');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;

  // Extract values from query parameters
  const purchasePrice = parseFloat(queryObject.purchase) || 0;
  const sellingPrice = parseFloat(queryObject.selling) || 0;
  const quantity = parseInt(queryObject.quantity) || 0;

  // Validate inputs
  if (purchasePrice <= 0 || sellingPrice <= 0 || quantity <= 0) {
    res.writeHead(400, { 'Content-Type': 'text/html' });
    return res.end('<p style="color: red;">Invalid input! Please provide valid numbers for purchase, selling, and quantity.</p>');
  }

  // Calculate profit or loss
  const { type, amount } = calculateProfitOrLoss(purchasePrice, sellingPrice, quantity);

  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Set the CSS style based on profit or loss
  const colorStyle = type === 'Profit' ? 'green' : type === 'Loss' ? 'red' : 'black';

  // Send the HTML response
  res.end(`<p style="color: ${colorStyle};">Type: ${type}, Amount: ${amount}</p>`);
});

// Listening on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
