export default function createIteratorObject(report) {
  let arr = [];
  const employeesList = report.allEmployees;
  for (const employees of Object.values(employeesList)) {
    arr = [...arr, ...employees];
  }

  return arr[Symbol.iterator]();
}
