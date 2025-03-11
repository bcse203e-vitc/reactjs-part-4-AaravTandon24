const AddStudent = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !age.trim() || !grade.trim()) return;
    onAddStudent({ name, age, grade });
    setName("");
    setAge("");
    setGrade("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />
      <input
        type="text"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        placeholder="Grade"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddStudent;
