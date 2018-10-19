const fs = require('fs');

fs.readFile('contents.txt', 'utf8', (err, data) => {
  if (err) throw err;
  
  const destination = 'modified.txt';
  const uppercasedContent = data.split('\n').map(s => s.toUpperCase()).join('\n');
  
  fs.writeFile(destination, uppercasedContent, err => {
    if (err) throw err;

    console.log(`Whohoo made your changes see them here 🎉 ${destination} 🎉`);
  });
});