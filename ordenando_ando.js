const fs = require('fs');

fs.readFile('registros_300.csv', 'utf-8',(err, data) => {
  if(err) {
    console.log('error: ', err);
  } else {
    console.log(data);
  }
})