module.exports = function check(str, bracketsConfig) {
  
var bracketsObject = {};
var bracketsArray = [];

for (var i = 0; i < bracketsConfig.length; i++) {
    bracketsObject[bracketsConfig[i][0]] = bracketsConfig[i][1];
}

var firstBracket = str[0];

if (bracketsObject[firstBracket] === false) {
    return false;
} else {
  bracketsArray.push(firstBracket);
}

for (var j = 1; j < str.length; j++) {
    if (bracketsObject[str[j]] === true) {
      bracketsArray.push(str[j]);
    } else {
        if (bracketsObject[str[j - 1]] === str[j]) {
            bracketsArray.pop();
        } else {
            return false;
        }
    }
  }

  if (bracketsArray.length !== 0)  {
    return false;
  } else {
    return true;
  }
};



  

