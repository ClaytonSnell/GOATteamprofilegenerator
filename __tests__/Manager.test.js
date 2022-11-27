const Manager = require('../lib/Manager');
const manager = new Manager('Snoop', '4', 'test@test.com', '20');

test("we should get the name/id/email for the manager", () => {
    expect(manager.name).toBe('Snoop');
    expect(manager.id).toBe('4');
    expect(manager.email).toEqual('test@test.com');
    expect(manager.officeNumber).toEqual('20');
});
    
test("we should get the name from getName()", () => {
    expect(manager.getName()).toEqual('Snoop');
});

test("we should get the employee ID from getId()", () => {
    expect(manager.getId()).toEqual('4');
});

test("we should get the email from getEmail()", () => {
    expect(manager.getEmail()).toEqual('test@test.com');
});

test("we should get the office number from getOfficeNumber()", () => {
    expect(manager.getOfficeNum()).toEqual('20');
});

test("we should get the role from getRole()", () => {
    expect(manager.getRole()).toEqual('Manager');
});