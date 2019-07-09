const isEven = (num) => {
  if (num % 2 == 0) {
  return true
  } 
  // write code for numbers.isEven

}


 var sum = (arr) => (arr.length === 0) ? 0 : arr[0] + sum(arr.slice(1));

  // write code for numbers.sum



const comboSum = (arr, sum) => {
  if (arr == sum) {
  return true
  }  else 
  return false
  // write code for numbers.comboSum

}

module.exports = {
  isEven,
  sum,
  comboSum
}