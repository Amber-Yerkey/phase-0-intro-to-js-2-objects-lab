const employee = {
    name: "Amber",
    streetAddress: "1234 Wee Sing Lane"
}


function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee, [key]:value}
    return newEmployee
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}


function deleteFromEmployeeByKey(employee, key){
    employee = {...employee}
    delete employee[key]
    return employee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}


/*

  describe('destructivelyDeleteFromEmployeeByKey(employee, key)', function () {
    it('returns employee without the deleted key/value pair', function () {
      let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');

      expect(newEmployee['name']).to.equal(undefined);
    });

    it('modifies the original employee', function () {
      let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');

      expect(employee['name']).to.equal(undefined);
      expect(employee).to.equal(newEmployee);
    });
  });
});
*/