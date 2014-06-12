var Conversion = require('transformer-conversion');
var tNumber = require('transformer.number');
var tString = require('transformer.string');
// require any other modules you may need here.

module.exports = Conversion(tNumber, tString, convert);

function convert(num) {
  return num.toString();
};