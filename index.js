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

function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees){
    return employees.map(employee => createEmployeeRecord(employee));
}

function createTimeInEvent(date){
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(date.split(" ")[1]),
        date: date.split(" ")[0],
    })
    return this;
}
function createTimeOutEvent(date){
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(date.split(" ")[1]),
        date: date.split(" ")[0],
    })
    return this;
}
function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(e => e.date == date);
    const timeOut = this.timeOutEvents.find(e => e.date == date);
    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date){
    return (hoursWorkedOnDate.call(this, date) * this.payPerHour);
}

function findEmployeeByFirstName(employees, name){
    return employees.find(e => e.firstName == name)
}

function calculatePayroll(employees){
    return employees.reduce((total, employee) => total + allWagesFor.call(employee), 0)
}
//function calculatePayroll(records){
  //  return records.reduce((total, employee) => total + allWagesFor(employee), 0)
//}