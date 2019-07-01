let number = "123.34";
 let numToWord = {
    "1": "one", 
    "2": "two",
    "3": "tree",
    "4": "four",
    ".": "dot",

 } ;
 for (var i=0; i<number.length; i++){
    console.log(numToWord[number[i]]);
 }
     