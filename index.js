var transformer = require('dat-transformer');
var tNumber = transformer('number');
var tString = transformer('string');
// require any other modules you may need here.

module.exports = transformer.Conversion(tNumber, tString, convert);

function convert(num) {
  return num.toString();
};