var wrapLog = function (callback, name) {
  /* your code here */
  return function() {
    var result = "";
    result += name + "(";
    result += Array.from(arguments).join(", ") + ")";
    result += " => ";
    result += callback.apply(null, arguments);
    // console.log(result);
    return result;
  }

};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

console.log(logArea(5, 3)); // area(5, 3) => 15
console.log(logArea(3, 2)); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

console.log(logVolume(5, 3, 2)); // volume(5, 3, 2) => 30
console.log(logVolume(3, 2, 4)); // volume(3, 2, 4) => 24

