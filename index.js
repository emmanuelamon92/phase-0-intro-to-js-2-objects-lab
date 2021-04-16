// Write your solution in this file!
const employee = {
    name: 'John Doe',
    streetAddress: '1234 John Island'
};

let updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const newObj = {...employee}
    newObj['streetAddress'] = '11 Broadway'
    return newObj
}
let destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee
}
let deleteFromEmployeeByKey = (employee, key) => {
    const delObj = {...employee}
    delete delObj[key]
    return delObj
}
let destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key]
    return employee
}