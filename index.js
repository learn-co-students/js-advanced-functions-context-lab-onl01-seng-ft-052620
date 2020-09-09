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

let createEmployeeRecord = function(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(array) {
    return array.map(element => createEmployeeRecord(element))
}

let createTimeInEvent = function(time) {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time.split(" ")[1], 10),
        date: time.split(" ")[0]
    })
    return this
}
let createTimeOutEvent = function(time) {
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time.split(" ")[1], 10),
        date: time.split(" ")[0]
    })
    return this
}

let hoursWorkedOnDate = function(date) {
    let timeInOnDate = this.timeInEvents.find(timeIn => timeIn.date === date)
    let timeOutOnDate = this.timeOutEvents.find(timeOut => timeOut.date === date)
    let hoursWorked = timeOutOnDate.hour - timeInOnDate.hour
    return hoursWorked/100
}

let wagesEarnedOnDate = function(date) {
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    return hoursWorked * this.payPerHour
}

function allWagesFor(){
    let total = 0
    this.timeInEvents.forEach(timeIn => total+= wagesEarnedOnDate.call(this, timeIn.date))
    return total
}

let calculatePayroll = function(employees) {
    let payroll = 0
    employees.forEach(employee => payroll += allWagesFor.call(employee))
    return payroll
}

let findEmployeeByFirstName = function(employees, name) {
    return employees.find(employee => employee.firstName === name)
}