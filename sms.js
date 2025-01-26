class Student {
    constructor(name, id) {
      this.name = name;
      this.id = id;
      this.grades = [];
    }
  
    addGrade(grade) {
      this.grades.push(grade);
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) return 0;
      const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
      return sum / this.grades.length;
    }
  
    getDetails() {
      return `Name: ${this.name}, ID: ${this.id}, Grades: ${this.grades.join(', ')}, Average Grade: ${this.getAverageGrade().toFixed(2)}`;
    }
  }
  
  class StudentManagementSystem {
    constructor() {
      this.students = [];
    }
  
    addStudent(name, id) {
      const newStudent = new Student(name, id);
      this.students.push(newStudent);
      return newStudent;
    }
  
    findStudent(id) {
      return this.students.find(student => student.id === id);
    }
  
    viewStudentDetails(id) {
      const student = this.findStudent(id);
      if (student) {
        return student.getDetails();
      } else {
        return "Student not found.";
      }
    }
  }
  
  // Usage example
  const sms = new StudentManagementSystem();
  
  // Adding new students
  const john = sms.addStudent("John Doe", "S001");
  const jane = sms.addStudent("Jane Smith", "S002");
  
  // Adding grades
  john.addGrade(85);
  john.addGrade(90);
  john.addGrade(78);
  
  jane.addGrade(92);
  jane.addGrade(88);
  jane.addGrade(95);
  
  // Viewing student details
  console.log(sms.viewStudentDetails("S001"));
  console.log(sms.viewStudentDetails("S002"));
  
  // Trying to view a non-existent student
  console.log(sms.viewStudentDetails("S003"));
