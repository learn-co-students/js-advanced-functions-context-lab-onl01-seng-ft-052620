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
    return records.reduce((start, record) => start += allWagesFor.call(record), 0)
}

function findEmployeeByFirstName(collection, name){
    return collection.find(record => record.firstName === name)
}


function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}


// let src = [
//     ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
//     ["Natalia", "Romanov", "CEO", 150]
//   ]
//   let emps = createEmployeeRecords(src)
//   let loki = findEmployeeByFirstName(emps, "Loki")