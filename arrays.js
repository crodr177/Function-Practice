// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


// ---------------------------
// 1. Find largest number
// ---------------------------

var largestNum = Math.max(...numbers); //Math.max(); - checks for the the largest number
console.log(largestNum);



// ---------------------------
// 2. Find longest string
// ---------------------------

function longestStr (array) {
  var longestWord = "";
  array.forEach(function(strings) { //.forEach(); - takes each element of an array once 
    if(strings.length > longestWord.length) {
      longestWord = strings;
    }
  });
  return longestWord;
}
var strings = longestStr(['this','is','a','collection','of','words']);
console.log(strings);

// ---------------------------
// 3. Find even numbers
// ---------------------------
function evenNum (numbers) {
  var arr = [];
  for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
      arr.push(numbers[i]); //.push(); - pushes a number to the top of an array
    }
  }
  return arr;
}

var even = evenNum([1,12,4,18,9,7,11,3,101,5,6]);
console.log(even);


// ---------------------------
// 4. Find odd numbers
// ---------------------------
function oddNum (numbers) {
  var arr = [];
  for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
      arr.push(numbers[i]); //.push(); - pushes a number to the top of an array
    }
  }
  return arr;
}

var odd = oddNum([1,12,4,18,9,7,11,3,101,5,6]);
console.log(odd);

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------




// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------