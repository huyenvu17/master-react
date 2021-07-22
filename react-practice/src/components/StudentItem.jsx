import React from 'react'

export default function StudentItem({ student }) {
  return (
    <li className="list-group=item" key={student.id}>
      <span className="me-3">
        {student.name}: {student.age}
      </span>
      <button className="btn btn-info" type="button">
        Edit
      </button>
      <button className="btn btn-danger" type="button">
        Delete
      </button>
    </li>
  )
}
