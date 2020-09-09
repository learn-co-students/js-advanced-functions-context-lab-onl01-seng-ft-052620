/* Your Code Here */
function createEmployeeRecord(array){
    let employee = { 
        firstName: array[0], 
        familyName: array[1], 
        title: array[2], 
        payPerHour: array[3], 
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}
function createEmployeeRecords(array){
    let employees = array.map(e => createEmployeeRecord(e))
    return employees
}

function createTimeInEvent(timeStamp){
    this.timeInEvents.push({
        type: "TimeIn", 
        date: timeStamp.split(" ")[0],
        hour: parseInt(timeStamp.split(" ")[1], 10)
    })
    return this 
}
function createTimeOutEvent(timeStamp){
    this.timeOutEvents.push({
        type: "TimeOut", 
        date: timeStamp.split(" ")[0],
        hour: parseInt(timeStamp.split(" ")[1], 10)
    })
    return this
}
function hoursWorkedOnDate(timeStamp){
    let timeInOnDate = this.timeInEvents.find(timeIn => timeIn.date === timeStamp)
    let timeOutOnDate = this.timeOutEvents.find(timeOut => timeOut.date === timeStamp)
    let hoursWorked = timeOutOnDate.hour - timeInOnDate.hour 
    return hoursWorked/100 
}
function wagesEarnedOnDate(timeStamp){
    let wagesEarned = hoursWorkedOnDate.call(this, timeStamp)
    return wagesEarned * this.payPerHour
}
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
function findEmployeeByFirstName(srcArray, name){
    return srcArray.find(e => e.firstName === name)
}
function calculatePayroll(array){
    return array.reduce(function(memo, record){
        return memo + allWagesFor.call(record)
    }, 0)
}

