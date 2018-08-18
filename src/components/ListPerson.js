import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PersonApi from '../services/Api'

class ListPerson extends Component {
  state = {
    term: '',
  }

  render() {
    const { term } = this.state

    return (
      <div>
        <h1>List of Person</h1>
        <div>
          <input
            type="text"
            placeholder="Type your search"
            onChange={e =>
              this.setState({ term: e.target.value.toLowerCase() })
            }
          />
        </div>
        <ul className="persons">
          {!term
            ? PersonApi.all().map(person => (
                <li key={person.id}>
                  <Link to={`/persons/${person.id}`}>
                    {person.firstName} {person.lastName} (
                    {person.nationality_id})
                  </Link>
                </li>
              ))
            : PersonApi.search(term).map(person => (
                <li key={person.id}>
                  <Link to={`/persons/${person.id}`}>
                    {person.firstName} {person.lastName} (
                    {person.nationality_id})
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    )
  }
}

export default ListPerson
