
const Intern = require('../lib/Intern');
const intern = new Intern('clayton', '13', 'test@test.com', 'Hardknocks');

test("we should get the name/id/email for the intern", () => {
    expect(intern.name).toBe('clayton');
    expect(intern.id).toBe('13');
    expect(intern.email).toEqual('test@test.com');
    expect(intern.school).toEqual('Hardknocks');
});
    
test("we should get the name from getName()", () => {
    expect(intern.getName()).toEqual('clayton');
});

test("we should get the employee ID from getID()", () => {
    expect(intern.getId()).toEqual('13');
});

test("we should get the email from getEmail()", () => {
    expect(intern.getEmail()).toEqual('test@test.com');
});

test("we should get the name of the school from getSchool()", () => {
    expect(intern.getSchool()).toEqual('Hardknocks');
});

test("we should get the role from getRole()", () => {
    expect(intern.getRole()).toEqual('Intern');
});