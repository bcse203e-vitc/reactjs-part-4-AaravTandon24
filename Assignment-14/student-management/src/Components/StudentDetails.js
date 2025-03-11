import React from "react";
import { useParams } from "react-router-dom";

const StudentDetails = ({ students }) => {
  const { id } = useParams();
  const student = students.find((student) => student.id === parseInt(id));

  return (
    <div>
      <h2>Student Details</h2>
      {student ? (
        <div>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Grade: {student.grade}</p>
          <p>Email: {student.email}</p>
          <p>Phone: {student.phone}</p>
          <p>Address: {student.address}</p>
        </div>
      ) : (
        <p>Student not found</p>
      )}
    </div>
  );
};

export default StudentDetails;
