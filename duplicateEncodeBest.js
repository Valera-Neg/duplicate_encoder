function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (element, index, array) {
      return array.indexOf(element) == array.lastIndexOf(element) ? '(' : ')'
    })
    .join('');
}


console.log(duplicateEncode("din")) //>   "((("
console.log(duplicateEncode("recede")) //>  "()()()"
console.log(duplicateEncode("Success")) //> ")())())"
console.log(duplicateEncode("(( @")) //>    "))(("