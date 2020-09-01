/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(recordAry){
    return {
      firstName: recordAry[0],
      familyName: recordAry[1],
      title: recordAry[2],
      payPerHour: recordAry[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  
  function createEmployeeRecords(recordsAry){
    return recordsAry.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(dateStamp){
    return createTimeEvent.call(this, "timeIn", dateStamp);
  }
  
  function createTimeOutEvent(dateStamp){
    return createTimeEvent.call(this, "timeOut", dateStamp);
  }
  
  function createTimeEvent(type, dateStamp){
    const [date, hour] = dateStamp.split(" ")
    this[type + "Events"].push({
      type: type[0].toUpperCase() + type.slice(1),
      date: date,
      hour: parseInt(hour, 10)
    });
    return this
  }
  
  function hoursWorkedOnDate(date){
    const timeInEvent = this.timeInEvents.find((event)=>event.date === date)
    const timeOutEvent = this.timeOutEvents.find((event)=>event.date === date)
    return (timeOutEvent.hour - timeInEvent.hour)/100;
  }
  
  function wagesEarnedOnDate(date){
    return this.payPerHour*hoursWorkedOnDate.call(this, date);
  }
  
//   function allWagesFor(record){
//     const datesWorked = record.timeOutEvents.map((event)=>event.date)
//     return datesWorked.reduce((totalWages, date)=> {
//       return totalWages + wagesEarnedOnDate(record, date)
//     }, 0)
//   }
  
  function findEmployeeByFirstName(recordsAry, firstName){
    return recordsAry.find((record)=>record.firstName === firstName)
  }
  
  function calculatePayroll(recordsAry){
    return recordsAry.reduce(function (totalWages, record){
      return totalWages + allWagesFor.call(record);
    }, 0);
  }