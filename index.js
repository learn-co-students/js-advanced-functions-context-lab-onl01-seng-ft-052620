/* Your Code Here */
function createEmployeeRecord(array){
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }

  function createEmployeeRecords(employees) {
     return  employees.map(e => createEmployeeRecord(e)
       )}
       
       function createTimeInEvent(date){
        this.timeInEvents.push({
            type: "TimeIn",
            hour: parseInt(date.split(" ")[1], 10),
            date: date.split(" ")[0]
         
    })
    return this
    }

    function createTimeOutEvent(date){
        this.timeOutEvents.push({
            type: "TimeOut",
            hour: parseInt(date.split(" ")[1], 10),
            date: date.split(" ")[0]
         
    })
    return this
    }
    
    function hoursWorkedOnDate (date){
        let timeInOnDate = this.timeInEvents.find(timeIn => timeIn.date === date)
        let timeOutOnDate = this.timeOutEvents.find(timeOut => timeOut.date === date)
        let hoursWorked = timeOutOnDate.hour - timeInOnDate.hour
        return hoursWorked/100
    }
function wagesEarnedOnDate(date){
    let rawWage = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return parseFloat(rawWage.toString())
}

function allWagesFor(){
    let total = 0
    this.timeInEvents.forEach(timeIn => total+= wagesEarnedOnDate.call(this, timeIn.date))
    return total
}

function calculatePayroll(employees){
    let payroll = 0
    employees.forEach(employee => payroll+= allWagesFor.call(employee))
    return payroll
}

function findEmployeeByFirstName(employees, name){
    return  employees.find(employee=> employee.firstName === name)
 }
      



      
   

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

//let allWagesFor = function () {
//    let eligibleDates = this.timeInEvents.map(function (e) {
//        return e.date
//    })
//
//    let payable = eligibleDates.reduce(function (memo, d) {
//        return memo + wagesEarnedOnDate.call(this, d)
//    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
//
//    return payable
//}

