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

/*for (var j = 1; j < str.length; j++) {
    if (bracketsObject[str[j]]){
      bracketsArray.push(str[j]);
    } else {
        if (bracketsObject[str[j - 1]] === str[j]) {
            bracketsArray.pop();
        } else {
            return false;
        }
    }
  }*/
  var j = 1;
  var string = true;
  while (string && j < str.length) {
    if (bracketsObject[str[j]]){
      if (bracketsObject[str[j]] === str[j]) {
        bracketsArray.pop();
      } else {
        bracketsArray.push(str[j]);
      }
    } else {
        if (bracketsObject[bracketsArray[bracketsArray.length - 1]] === str[j]){
            bracketsArray.pop();
        } else {
            string === false;
        }
    }
     j++;
  }

  if (string === false) {
    return false;
  } else {
    if (bracketsArray.length !== 0) {
        return false;
    } else {
        return true;
    }
  }

};



  

