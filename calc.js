// Function to calculate profit or loss
function calculateProfitOrLoss(purchasePrice, sellingPrice, quantity) {
    const costPrice = purchasePrice * quantity;
    const sellingValue = sellingPrice * quantity;
    const profit = sellingValue - costPrice;
    const loss = costPrice - sellingValue;
  
    if (profit > 0) {
      return { type: 'Profit', amount: profit };
    } else if (loss > 0) {
      return { type: 'Loss', amount: loss };
    } else {
      return { type: 'No Profit No Loss', amount: 0 };
    }
  }
  

  
  // Exporting the functions to make them accessible in other files
  module.exports = { calculateProfitOrLoss, };
