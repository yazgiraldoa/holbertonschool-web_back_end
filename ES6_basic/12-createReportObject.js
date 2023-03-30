export default function createReportObject(employeesList) {
  const allEmployeesObj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) { return Object.keys(employeesList).length; },
  };
  return allEmployeesObj;
}
