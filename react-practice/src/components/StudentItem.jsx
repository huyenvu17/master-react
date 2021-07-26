import React from 'react'
import PropTypes from 'prop-types'
export default function StudentItem({ student, handleDelete, handleStartUpdate }) {
  return (
    <li className="list-group=item" key={student.id}>
      <span className="me-3">
        {student.name}: {student.age}
      </span>
      <button className="btn btn-info" type="button" onClick={() => handleStartUpdate(student.id)}>
        Edit
      </button>
      <button className="btn btn-danger" type="button" onClick={() => handleDelete(student.id)}>
        Delete
      </button>
    </li>
  )
}
StudentItem.propTypes = {
  student: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired
}
