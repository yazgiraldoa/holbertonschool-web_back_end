export default function getStudentIdsSum(studentList) {
  const idList = studentList.map((x) => x.id);
  return idList.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
  );
}
