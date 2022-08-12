/*
The goal of this exercise is to convert a string to a new string 
where each character in the new string is "(" if that character appears only once in the original string, or ")" 
if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes
Assertion messages may be unclear about what they display in some languages. 
If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/


function duplicateEncode(word){
  let res = "";
  const text = word.toLowerCase().split(""); 
  let valuesSoFar = [];
  for (let i = 0; i < text.length; i++) {
      let value = text[i];
      valuesSoFar.push(value);
      let checkArr = text.filter(e => e === valuesSoFar[0])        
      checkArr.length > 1 ? res += ")":  res += "(" 
      valuesSoFar.pop(value);
      checkArr = [];      
  }
 
  return res;

}


console.log(duplicateEncode("din")) //>   "((("
console.log(duplicateEncode("recede")) //>  "()()()"
console.log(duplicateEncode("Success")) //> ")())())"
console.log(duplicateEncode("(( @")) //>    "))(("