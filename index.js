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
    this.timeInEvents.push( {type: 'TimeIn', date: dateStamp.split(' ')[0], hour: parseInt(dateStamp.split(' ')[1], 10)})
    return this
}

function createTimeOutEvent(dateStamp){
    this.timeOutEvents.push({type: "TimeOut", date: dateStamp.split(' ')[0], hour: parseInt(dateStamp.split(' ')[1], 10)})
    return this
}

function hoursWorkedOnDate(date){
    let starting = this.timeInEvents.find(function(e){
        return e.date === date})
    let ending = this.timeOutEvents.find(function(e){
        return e.date === date})
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

function findEmployeeByFirstName(collection){
    collection.find(record => record.firstName === this.familyName)
}


function wagesEarnedOnDate(date){
    return hoursWorkedOnDate(date) * this.payPerHour
}


// cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
//         createTimeInEvent.call(cRecord, "44-03-15 0900")
//         createTimeOutEvent.call(cRecord, "44-03-15 1100")
//         wagesEarnedOnDate.call(cRecord, "44-03-15")
