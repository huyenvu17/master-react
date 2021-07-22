import React, { useState } from 'react'
import StudentItem from '../components/StudentItem'
import PropTypes from 'prop-types'
import Input from '../components/Input'
export default function StudentManagement() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [students, setStudents] = useState([])

  const handleChange = setFunc => value => setFunc(value)
  const handleSubmit = event => {
    event.preventDefault()
    if (name !== '' && age !== '') {
      setStudents(prevStudent => [
        ...prevStudent,
        {
          id: new Date().toISOString(),
          name,
          age
        }
      ])
    }
  }
  return (
    <div>
      <h1>Student Management</h1>
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <Input
            type="text"
            className="form-control"
            id="name"
            placeholder="enter name"
            value={name}
            onChange={handleChange(setName)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age:
          </label>
          <Input
            type="text"
            className="form-control"
            id="age"
            placeholder="enter age"
            value={age}
            onChange={handleChange(setAge)}
          />
        </div>
        <div>
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </form>
      <ul className="list-group">
        {students.map(student => (
          <StudentItem key={student.id} student={student} />
        ))}
      </ul>
    </div>
  )
}
StudentManagement.propTypes = {
  student: PropTypes.object.isRequired
}
