import React from 'react'
import { Link } from 'react-router-dom'
import PersonApi from '../services/Api'

const Person = props => {
  const id = parseInt(props.match.params.id, 10)
  const person = PersonApi.get(id)

  if (!person) {
    return <div>Sorry, but the person not found</div>
  }
  return (
    <div>
      <h1>
        {person.firstName} {person.lastName}
      </h1>
      <p>
        <ul>
          <li>Sex: {person.sex}</li>
          <li>
            Nationality: {person.nationality} ({person.nationality_id})
          </li>
        </ul>
      </p>
      <div className="btn-back">
        <Link to="/persons">Back</Link>
      </div>
    </div>
  )
}

export default Person
