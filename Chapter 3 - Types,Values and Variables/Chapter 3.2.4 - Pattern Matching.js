var text = " testing 1,  2, 3";
var pattern = /\d+/g;
var patternFound = pattern.test(text);
var positionOfFirstMatch = text.search(pattern);
var allMatches = text.match(pattern);
var replacedText = text.replace(pattern, "#");
var splitArr = text.split(/\D+/);

console.log("Pattern found result", patternFound);
console.log("Position Of First Match", positionOfFirstMatch);
console.log("All Matches", allMatches);
console.log("Replaced Text", replacedText);
console.log("Split array", splitArr);

