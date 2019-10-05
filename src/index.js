module.exports = function check(str, bracketsConfig) {
  
var bracketsObject = {};
var bracketsArray = [];

for (var i = 0; i < bracketsConfig.length; i++) {
    bracketsObject[bracketsConfig[0]] = bracketsConfig[1];
}

var firstBracket = str[0];

if (bracketsObject[firstBracket] === false) {
    return false;
} else {
  bracketsArray.push(firstBracket);
}

for (var j = 1; j < str.length; j++) {
    if (bracketsObject[str[j]] === true) {
      bracketsObject.push(str[j]);
    } else {
        if (bracketsObject[str[j - 1]] === str[j]) {
            bracketsObject.pop(str[j - 1]);
        } else {
            return false;
        }
    }
  }
};



  

