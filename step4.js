var https = require('https');

function getHTML (options, callback) {

https.get(options, function (response) {

  var finalData = "";

  response.setEncoding('utf8');

  response.on('data', function (data) {
    // console.log('Chunk Received:', data);
    return callback(data);
    finalData += data
  });

  response.on('end', function() {
    console.log('Response Complete.');
    });

  })
}

function printHTML (html) {
  console.log(html);
}

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

getHTML(requestOptions,printHTML);