import React, { Fragment, useState } from 'react'
import StudentItem from '../components/StudentItem'
import Input from '../components/Input'
export default function StudentManagement() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [students, setStudents] = useState([])
  const [currentStudent, setCurrentStudent] = useState(null)
  const handleChange = setFunc => value => setFunc(value)
  const handleAdd = event => {
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
      setAge('')
      setName('')
    }
  }
  const handleDelete = id => {
    const index = students.findIndex(x => x.id === id)
    const _students = [...students]
    _students.splice(index, 1)
    setStudents(_students)
  }
  const handleStartUpdate = id => {
    const student = students.find(x => x.id === id)
    setCurrentStudent(student)
    setName(student.name)
    setAge(student.age)
  }

  const handleUpdate = () => {
    if (name !== '' && age !== '') {
      const _students = students.map(student => {
        if (student.id === currentStudent.id) {
          return {
            name,
            age,
            id: currentStudent.id
          }
        }
        return student
      })
      setStudents(_students)
      handleBack()
    }
  }
  const handleBack = () => {
    setName('')
    setAge('')
    setCurrentStudent(null)
  }
  return (
    <div>
      <h1>Student Management</h1>
      <form className="mb-3">
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
            type="number"
            className="form-control"
            id="age"
            placeholder="enter age"
            value={age}
            onChange={handleChange(setAge)}
          />
        </div>
        <div>
          {currentStudent ? (
            <Fragment>
              <button className="btn btn-primary" type="button" onClick={handleUpdate}>
                Edit
              </button>
              <button className="btn btn-dark" type="button" onClick={handleBack}>
                Back
              </button>
            </Fragment>
          ) : (
            <button className="btn btn-primary" type="button" onClick={handleAdd}>
              Add
            </button>
          )}
        </div>
      </form>
      <ul className="list-group">
        {students.length > 0 &&
          students.map(student => (
            <StudentItem
              key={student.id}
              student={student}
              handleDelete={handleDelete}
              handleStartUpdate={handleStartUpdate}
            />
          ))}
      </ul>
    </div>
  )
}
