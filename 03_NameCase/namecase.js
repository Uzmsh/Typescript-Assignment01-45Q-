//store the name in a variable
var personName = "Dafodills Hills";
//print name in lowercase
console.log("lowecase:", personName.toLowerCase());
//print  name in upper case
console.log("uppercase:", personName.toUpperCase());
//print name in titlecase
console.log("titlecase:", personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
