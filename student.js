// Lê Trần Nhật Quang - 2180606590
class Student {
    constructor(name, age, score1, score2) {
        this.name = name;
        this.age = age;
        this.score1 = score1;
        this.score2 = score2;
    }
}


const students = [
    new Student("Nguyễn Văn Bảnh ", 20, 8, 7),
    new Student("Trần Thị Cúc", 11, 2, 9),
    new Student("Lê Trần Nhật Quang", 19, 15, 8),
    new Student("Phạm Thị Én", 18, 7, 6)
];


function getGrade(average) {
    if (average >= 8) return "Giỏi";
    if (average >= 6.5) return "Khá";
    if (average >= 5) return "Trung bình";
    return "Yếu";
}


const grades = students.map(student => {
    const average = (student.score1 + student.score2) / 2;
    return {
        name: student.name,
        grade: getGrade(average)
    };
});
console.log("Xếp loại của từng sinh viên:");
grades.forEach(g => console.log(`${g.name}: ${g.grade}`));

const totalAverage = students.reduce((sum, student) => {
    return sum + (student.score1 + student.score2) / 2;
}, 0) / students.length;
console.log(`\nĐiểm trung bình của cả lớp: ${totalAverage.toFixed(2)}`);

const hasUnder18 = students.some(student => student.age < 18);
console.log(`\nCó sinh viên dưới 18 tuổi không? ${hasUnder18 ? "Có" : "Không"}`);

const hasFullName = students.every(student => student.name.trim() !== "");
console.log(`\nCả lớp có đầy đủ tên không? ${hasFullName ? "Có" : "Không"}`);