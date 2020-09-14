/* Your Code Here */
function createEmployeeRecord(arr){
    const newObj = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return newObj
}

function createEmployeeRecords(arrOfArr){
    return arrOfArr.map(function(arr){return createEmployeeRecord(arr)});
}

function createTimeInEvent(date){
    let h = parseInt(date.split(' ')[1],10)
    let d = date.split(' ')[0]

    let timeIn = {
        type: "TimeIn",
        hour: h,
        date: d
    }
    this.timeInEvents.push(timeIn)
    return this
}

function createTimeOutEvent(date){
    let h = parseInt(date.split(' ')[1],10)
    let d = date.split(' ')[0]

    let timeOut = {
        type: "TimeOut",
        hour: h,
        date: d
    }
    this.timeOutEvents.push(timeOut)
    return this
}

function hoursWorkedOnDate(date){
    let hoursWorked = 0
    let timeIn = this.timeInEvents.find(function(obj){return obj.date==date})
    let timeOut = this.timeOutEvents.find(function(obj){return obj.date==date})

    return hoursWorked = (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date){
    let hours = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * hours
}


function findEmployeeByFirstName(records, firstName){
    return records.find(function(obj){
        return obj.firstName === firstName
    })
}

function calculatePayroll(records){
    return records.reduce(function(memo, record){
        return memo + allWagesFor.call(record)
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