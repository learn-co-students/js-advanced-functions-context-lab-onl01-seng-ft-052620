/* Your Code Here */
let createEmployeeRecord = function (array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function (array) {
    return array.map( e => createEmployeeRecord(e))
}

let createTimeInEvent = function (datestamp) {
    let [date, hour] = datestamp.split(" ")

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    })

    return this
}

let createTimeOutEvent = function (datestamp) {
    let [date, hour] = datestamp.split(" ")

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    })

    return this
}

let hoursWorkedOnDate = function (date) {
    let timeIn = this.timeInEvents.find( e => e.date === date)
    let timeOut = this.timeOutEvents.find( e => e.date === date)
    
    if (timeOut) {
        return (timeOut.hour - timeIn.hour)/100
    } else {
        alert(`${this.firstName} ${this.familyName} has not punched out on ${date}`)
    }
}

let wagesEarnedOnDate = function(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
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

let findEmployeeByFirstName = function(array, firstname) {
    return array.find(e => e.firstName === firstname)
}

let calculatePayroll = function (array) {
    return array.reduce(function(memo, d) {
        return memo + allWagesFor.call(d)
    }, 0)
}