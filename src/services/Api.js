const PersonAPI = {
  persons: [
    {
      id: 1,
      firstName: 'Rudi',
      lastName: 'Widodo',
      sex: 'Male',
      nationality: 'Indonesia',
      nationality_id: 'ID',
    },
    {
      id: 2,
      firstName: 'Antonio',
      lastName: 'Toldo',
      sex: 'Male',
      nationality: 'Italia',
      nationality_id: 'IT',
    },
    {
      id: 3,
      firstName: 'Harper',
      lastName: 'Rose',
      sex: 'Female',
      nationality: 'United Kingdom',
      nationality_id: 'UK',
    },
    {
      id: 4,
      firstName: 'Siti',
      lastName: 'Nurhaliza',
      sex: 'Female',
      nationality: 'Malaysia',
      nationality_id: 'MY',
    },
    {
      id: 5,
      firstName: 'Tsubasa',
      lastName: 'Ozora',
      sex: 'Male',
      nationality: 'Japan',
      nationality_id: 'JP',
    },
  ],
  all: function() {
    return this.persons
  },
  get: function(id) {
    return this.persons.find(person => person.id === id)
  },
  search: function(name) {
    return this.persons.filter(person =>
      `${person.firstName} ${person.lastName}`.toLowerCase().includes(name),
    )
  },
}

export default PersonAPI
