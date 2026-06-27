const employee = {
    empid : 123,
    empName : "Gaytri H.",
    doj : "23-06-2026",
    post : "HR-Admin",
    salary : 45000,
    projects : ["Ecommerce","Payroll","Attendance"],
    address : {
        flatno : 701,
        area : "Hinjewadi",
        city : "Pune",
        state : "MH",
        pincode : 443322
    },
    calculateTax : function(){
        // return salary * 0.01;
        let tax = this.salary * 0.01;
        console.log("tax = "+tax);
    }
}
console.log(employee.empName);
console.log(employee.address.city);
console.log(employee.salary);
employee.calculateTax();