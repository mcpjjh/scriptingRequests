module.exports = function getHTML (options, callback) {

var https = require('https');

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

//   var requestOptions = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step5.html'
//   };

// getHTML(requestOptions,printHTML);