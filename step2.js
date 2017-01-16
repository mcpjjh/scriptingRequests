var https = require('https');

function getAndPrintHTML () {

// var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

https.get(requestOptions, function (response) {

  var finalData = "";

  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log('Chunk Received:', data);
    finalData += data
  })

  response.on('end', function() {
    console.log(finalData);
  });

  })
}

getAndPrintHTML();
