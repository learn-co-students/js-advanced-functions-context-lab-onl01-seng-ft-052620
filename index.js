function createEmployeeRecord(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(dateStamp) {
    let timeStamp = dateStamp.split(" ")

    this.timeInEvents.push({
        type: "TimeIn",
        date: timeStamp[0],
        hour: parseInt(timeStamp[1], 10)
    })

    return this;
}

function createTimeOutEvent(dateStamp) {
    let timeStamp = dateStamp.split(" ")

    this.timeOutEvents.push({
        type: "TimeOut",
        date: timeStamp[0],
        hour: parseInt(timeStamp[1], 10)
    })

    return this;
}

function hoursWorkedOnDate(dateStamp) {
    let timeIn = this.timeInEvents.find(record => {
        return record.date === dateStamp
    })
    
    let timeOut = this.timeOutEvents.find(record => {
        return record.date === dateStamp
    })

    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(dateStamp) {
    return (hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour)
}

function findEmployeeByFirstName(employees, firstName) {
    return  employees.find(name => {
        return name.firstName === firstName
    })
}

function calculatePayroll(employees) {
    return employees.reduce(function(acc, employee) {
        return acc + allWagesFor.call(employee)
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