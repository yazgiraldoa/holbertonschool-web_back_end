export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentObj = studentList.filter((c) => c.location === city);
  return studentObj.map((student) => {
    const grades = newGrades.filter((x) => x.studentId === student.id);
    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: grades.length > 0 ? grades[0].grade : 'N/A',
    };
  });
}
