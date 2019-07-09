const split = (str, delim) => {
 
  str.split(delim)
  // write code for strings.split

}

const pairs = (str) => {
  for(let i = 0; i < str.length; i+2)
   return str.split("")
  // write code for strings.pairs

}

const reverse = (str) => {
  return  str.split('').reverse().join('')
  // write code for strings.reverse

}

module.exports = {
  split,
  pairs,
  reverse
}