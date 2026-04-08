const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// 1. Mock Database Tables (In-memory Arrays)
let students = [
    { id: 1, name: "Alice Johnson", courseId: 101 },
    { id: 2, name: "Bob Smith", courseId: 102 }
];

let courses = [
    { id: 101, title: "Web Development", duration: "3 Months" },
    { id: 102, title: "Data Science", duration: "4 Months" }
];

// --- STUDENTS CRUD ROUTES ---
// Read All Students
app.get('/students', (req, res) => res.json(students));

// Create Student
app.post('/students', (req, res) => {
    const newStudent = { id: students.length + 1, ...req.body };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// Update Student
app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);
    if (index === -1) return res.status(404).send('Student not found');
    students[index] = { id, ...req.body };
    res.json(students[index]);
});

// Delete Student
app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    students = students.filter(s => s.id !== id);
    res.json({ message: "Student deleted successfully" });
});

// --- COURSES CRUD ROUTES ---
// Read All Courses
app.get('/courses', (req, res) => res.json(courses));

// Create Course
app.post('/courses', (req, res) => {
    const newCourse = { id: courses.length + 101, ...req.body };
    courses.push(newCourse);
    res.status(201).json(newCourse);
});

// Update Course
app.put('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = courses.findIndex(c => c.id === id);
    if (index === -1) return res.status(404).send('Course not found');
    courses[index] = { id, ...req.body };
    res.json(courses[index]);
});

// Delete Course
app.delete('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    courses = courses.filter(c => c.id !== id);
    res.json({ message: "Course deleted successfully" });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
