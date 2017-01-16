var getHTML = require('./step5');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printUpperCase (html) {

// console.log(html);
// var splitString = html.split("");

// var reverseArray = splitString.reverse();
// var joinString = reverseArray.join("");

// console.log(joinString);

console.log(html.split("").reverse().join(""));

}

getHTML(requestOptions, printUpperCase);