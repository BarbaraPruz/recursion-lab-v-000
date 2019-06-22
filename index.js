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

function isPalindrome(str) {
  if (str[0] !== str[str.length-1])
    return false;
  let newString = str.substr(1,length-2)
  if (newString.length>0)
    return isPalindrome(newString)
  else
    return true
}
