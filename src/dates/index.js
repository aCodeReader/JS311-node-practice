const moment = require('moment')
// import moment here; use this package in each function

const today = () => {
  // write code for dates.today

  const day = moment().format('dddd')
  return day

}

const calendar = () => {
  const date = moment().format('LL')
  console.log(date)
return date
  
  // write code for dates.calendar

}

const currentTime = () => {
 let time = moment().format('LTS')
  // write code for dates.currentTime
  return time
}

module.exports = {
  today,
  calendar,
  currentTime
}