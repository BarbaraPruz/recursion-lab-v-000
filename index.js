// Code your solution here!
function printString(myString) {
  console.log(myString[0])
  if (myString.length > 1)
    printString(myString.substring(1))
}
