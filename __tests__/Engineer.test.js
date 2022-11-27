
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Clayton', '13', 'test@test.com', 'ctest');

test("we should get the name/id/github for the engineer", () => {
    expect(engineer.name).toEqual('Clayton');
    expect(engineer.id).toEqual('13');
    expect(engineer.email).toEqual('test@test.com');
    expect(engineer.github).toEqual('ctest');
});
    
test("we should get the name from getName()", () => {
    expect(engineer.getName()).toEqual('Clayton');
});

test("we should get the employee ID from getId()", () => {
    expect(engineer.getId()).toEqual('13');
});

test("we should get the email from getEmail()", () => {
    expect(engineer.getEmail()).toEqual('test@test.com');
});

test("we should get the GitHub username from getUserName()", () => {
    expect(engineer.getGithub()).toEqual('ctest');
});

test("we should get the role from getRole()", () => {
    expect(engineer.getRole()).toEqual('Engineer');
});