
const Employee = require('../lib/Employee');
const employee = new Employee('Clayton', '13', 'test@test.com');

test("we should get the name/id/email for the employee", () => {
    expect(employee.name).toEqual('Clayton');
    expect(employee.id).toEqual('13');
    expect(employee.email).toEqual('test@test.com');
});
    
test("we should get the name from getName()", () => {
    expect(employee.getName()).toEqual('Clayton');
});

test("we should get the employee ID from getID()", () => {
    expect(employee.getId()).toEqual('13');
});

test("we should get the email from getEmail()", () => {
    expect(employee.getEmail()).toEqual('test@test.com');
});

test("we should get the role from getRole()", () => {
    expect(employee.getRole()).toEqual('Employee');
});