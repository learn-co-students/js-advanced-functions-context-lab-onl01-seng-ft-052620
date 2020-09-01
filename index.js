/* Your Code Here */

function createEmployeeRecord(arr){
    const record = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return record
}

function createEmployeeRecords(arrayz){
    return arrayz.map(arr => createEmployeeRecord(arr))
}

function createTimeInEvent(dateStamp){
    this.timeInEvents.push( {type: 'TimeIn', date: dateStamp.slice(0, 10), hour: parseInt(dateStamp.slice(-5))})
    return this
}

function createTimeOutEvent(dateStamp){
    this.timeOutEvents.push({type: "TimeOut", date: dateStamp.slice(0, 10), hour: parseInt(dateStamp.slice(-5))})
    return this
}

function hoursWorkedOnDate(record, date){
    let starting = record.timeInEvents.find(e => return e.date == date)
    let ending = record.timeOutEvents.find(e => return e.date == date)
    let hours = (ending.hour - starting.hour) / 100
    return hours 

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


function calculatePayroll(records){
    let sum = 0
    records.map(record => sum += allWagesFor(record))
    return sum
}

function findEmployeeByFirstName(firstName){
    return self.find(record => record.firstName === firstName)
}