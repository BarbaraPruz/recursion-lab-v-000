// Code your solution here!
function printString(myString) {
  console.log(myString[0])
  if (myString.length > 1)
    printString(myString.substring(1))
}

function reverseString(str) {
  if (str.length > 0)
    return reverseString(str.substring(1)) + str[0]
  else {
    return ""
  }
}