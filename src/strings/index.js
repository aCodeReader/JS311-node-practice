const split = (str, delim) => {
 
 return str.split(delim)
  // write code for strings.split

}

const pairs = (str) => {
   return str.match(/(..?)/g)
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