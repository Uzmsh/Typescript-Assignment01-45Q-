//store the name in a variable
let personName : string = "Dafodills Hills";

//print name in lowercase
console.log("lowercase:", personName.toLowerCase());

//print  name in upper case
console.log("uppercase:", personName.toUpperCase());

//print name in titlecase by using regular expression
console.log("titlecase:", personName.replace(/\b\w/g,(c)=> c.toUpperCase()));