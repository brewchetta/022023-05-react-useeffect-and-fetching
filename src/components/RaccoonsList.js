import React, { useState } from 'react'
import RaccoonCard from './RaccoonCard'
import RaccoonForm from "./RaccoonForm"


// we are going to delete the raccoonsData in just a second.... //
const raccoonsData = [
  { id: 1, name: "Robert", favFood: "hamburgers" },
  { id: 2, name: "Rocket", favFood: "pizza" },
  { id: 3, name: "Rocky", favFood: "pizza" },
  { id: 4, name: "Red", favFood: "hamburgers" },
]
// delete the above ^^^ //


function RaccoonsList() {

  // our array of raccoons
  const [raccoonsArr, setRaccoonsArr] = useState(raccoonsData)

  function addRaccoon( newRaccoonObject ) {
    setRaccoonsArr( [ ...raccoonsArr, newRaccoonObject ] )
  }

  const mappedRaccoons = raccoonsArr.map( raccoon => <RaccoonCard key={raccoon.id} raccoon={raccoon} /> )

  return (
    <div className="raccoons-list border-black">

      <h2>🦝 Raccoons 🦝</h2>

      <RaccoonForm addRaccoon={addRaccoon} />

      <div className="flex">

        { mappedRaccoons }

      </div>

    </div>
  )
}

export default RaccoonsList
