
// not confident in this at all!

const fs = require('fs');

// JSON data
const jsonData = [
  { id: 1, name: 'Reagan Adams', age: 22 },
  { id: 2, name: 'Gabrielle Adams', age: 20 },
  { id: 3, name: 'Bianca Adams', age: 50 },
  { id: 4, name: 'Jogn Adams', age: 51 },
  
];

// Convert to JSON
const jsonString = JSON.stringify(jsonData, null, 2);

// Write JSON to disk
fs.QAP5Sync('data.json', jsonString, 'utf-8');

console.log('JSON data written to disk.');