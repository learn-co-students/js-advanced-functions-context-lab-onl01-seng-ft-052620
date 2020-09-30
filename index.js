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

let createEmployeeRecord = function(fourElementArray){
    return {
        firstName: fourElementArray[0],
        familyName: fourElementArray[1],
        title: fourElementArray[2],
        payPerHour: fourElementArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeeRecordsArray){
    let totalEmployeeRecords = []
    for(const employeeRecord of employeeRecordsArray){
        totalEmployeeRecords.push(createEmployeeRecord(employeeRecord))
    }
    return totalEmployeeRecords
}

let createTimeInEvent = function(dateStamp){
    this.timeInEvents.push({type: "TimeIn", hour: parseInt(dateStamp.split(" ")[1], 10), date: dateStamp.split(" ")[0]})
    return this
}

let createTimeOutEvent = function(dateStamp){
    this.timeOutEvents.push({type: "TimeOut", hour: parseInt(dateStamp.split(" ")[1], 10), date: dateStamp.split(" ")[0]})
    return this
}

let hoursWorkedOnDate = function(date){
    let timeIn = this.timeInEvents.find(timeEvent => timeEvent.date === date)
    let timeOut = this.timeOutEvents.find(timeEvent => timeEvent.date === date)
    return ((timeOut.hour - timeIn.hour)/100)
}

let wagesEarnedOnDate = function(date){
    return (this.payPerHour * hoursWorkedOnDate.call(this, date))
}

let findEmployeeByFirstName = function(srcArray, firstName){
    return srcArray.find(employee => employee.firstName === firstName)
}

let calculatePayroll = function(records){
    // return records.reduce((accumulator, currentValue) => accumulator + currentValue.)
    // let total = 0;
    
    return records.reduce((acc, currentValue) => {
    //    console.log("All Wages For: ", allWagesFor.call(currentValue));
    //    console.log(("Acc: ", acc))
       return acc + allWagesFor.call(currentValue)
    }
    , 0)
    
    // for(const employeeRecord of records){
    //     let initialValue = 0;
    //     // total += employeeRecord.timeInEvents.reduce((accumulator, currentValue) => accumulator + wagesEarnedOnDate(currentValue.date), initialValue)
    // }
}