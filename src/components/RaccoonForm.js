import React, { useState } from 'react'

function RaccoonForm({ addRaccoon }) {

  // the new raccoon object we're creating
  const [formData, setFormData] = useState( { name: '', favFood: '' } )

  // [e.target.name] is "name" or "food" depending on the name="" attribute in our input
  const handleChange = (e) => setFormData( { ...formData, [e.target.name]: e.target.value } )
  // const handleChangeName = (e) => setFormData( { ...formData, name: e.target.value } )
  // const handleChangeFavFood = (e) => setFormData( { ...formData, favFood: e.target.value } )

  // e.target.name ==> name / favFood

  // handleSubmit here only prevents default and fires the `addRaccoon` function it got from RaccoonsList
  function handleSubmit(e) {
    e.preventDefault()
    addRaccoon( formData )
  }

  return (

    <form onSubmit={ handleSubmit }>

      <label>Name:</label>
      <input type="text" onChange={handleChange} value={formData.name} name="name" />

      <label>Favorite Food:</label>
      <input type="text" onChange={handleChange} value={formData.favFood} name="favFood" />

      <input type="submit" value={'Add New Raccoon'} />

    </form>

  )
}

export default RaccoonForm
