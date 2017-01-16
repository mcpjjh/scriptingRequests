var https = require('https');

function getAndPrintHTML (options) {

https.get(options, function (response) {

  var finalData = "";

  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log('Chunk Received:', data);
    finalData += data
  });

  response.on('end', function() {
    console.log(finalData);
  });

  })
}

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions);
