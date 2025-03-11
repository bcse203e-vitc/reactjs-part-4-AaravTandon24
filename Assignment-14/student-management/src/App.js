import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentList from "./Components/StudentList";
import StudentDetails from "./Components/StudentDetails";

const App = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Aarav Tandon",
      age: 20,
      grade: "A",
      email: "ok@example.com",
      phone: "123-456-7890",
      address: "123 Main St",
    },
    {
      id: 2,
      name: "Karan Aujla",
      age: 22,
      grade: "B",
      email: "and@example.com",
      phone: "123-456-7890",
      address: "456 Elm St",
    },
  ]);

  const addStudent = (student) => {
    setStudents([...students, { id: students.length + 1, ...student }]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <StudentList students={students} onAddStudent={addStudent} />
          }
        />
        <Route
          path="/student/:id"
          element={<StudentDetails students={students} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
