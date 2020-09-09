/* Your Code Here */

const createEmployeeRecord = function(employeeArr){
    return {
        firstName: employeeArr[0],
        familyName: employeeArr[1],
        title: employeeArr[2],
        payPerHour: employeeArr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function(arr){
    return arr.map(employee => createEmployeeRecord(employee))
}

const createTimeInEvent = function(date_stamp){

    let [date,hour] = date_stamp.split(" ")

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    })

    return this
}

function createTimeOutEvent(date_stamp){
    let [date,hour] = date_stamp.split(" ")

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    })

    return this
}

const hoursWorkedOnDate = function(date){
    let timeIn = this.timeInEvents.find(event => event.date === date)
    let timeOut = this.timeOutEvents.find(event => event.date === date)

    return (timeOut.hour - timeIn.hour) / 100
}

const wagesEarnedOnDate = function(date){
    return hoursWorkedOnDate.call(this,date) * this.payPerHour
}

const findEmployeeByFirstName = function(employeeArr, name){
    return employeeArr.find(employee => employee.firstName === name)
}

const calculatePayroll = function(employeeArr){
    return employeeArr.reduce(function(total, employee){
        return total + allWagesFor.call(employee)
    }, 0)
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