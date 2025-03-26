const fs = require('fs');
const path = require('path');

// Define the folder and file paths
const folderPath = path.join('D:', 'MyFolder'); // Creating "MyFolder" in D drive
const filePath = path.join(folderPath, 'greeting.txt');

//  Check if folder exists, if not, create it
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
  console.log('Folder created successfully.');
} else {
  console.log('Folder already exists.');
}

//  Write "Good Morning" to the file
fs.writeFileSync(filePath, 'Good Morning', 'utf8');
console.log('File written successfully.');
