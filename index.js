const addDays = require("date-fns/addDays");

function addDaysAfterXDays(days) {
  let new_date = addDays(new Date(2020, 7, 22), days);
  return `${new_date.getDate()}-${
    new_date.getMonth() + 1
  }-${new_date.getFullYear()}`;
}
module.exports = addDaysAfterXDays;
