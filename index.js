// Code your solution here!
function printString(str) {
  console.log(str[0])
  if (str.len > 1)
    printString(str.substring(1))
}
