import React, { useState, useEffect } from 'react'
import RaccoonCard from './RaccoonCard'
import RaccoonForm from "./RaccoonForm"

function RaccoonsList() {

  // our array of raccoons
  const [raccoonsArr, setRaccoonsArr] = useState( [] )
  // start with empty array so it doesn't break our code

  // counter is a piece of state that's here for demonstration purposes
  const [counter, setCounter] = useState(0)

  // console.log("outside the useEffect")

  // example of useEffect that triggers every time counter changes:
  useEffect(() => {
    console.log(`counter is currently ${counter}`)
  }, [counter])
  // [counter] is a dependency array --> this will fire whenever counter changes AND the first time it mounts


  // example of useEffect with a cleanup function:
  // useEffect(() => {
  //   beginTimer()
  //
  //   return () => endTimer()
  // }, [])
  // this will fire `beginTimer` when the component appears and `endTimer` if it unmounts / disappears

  // this useEffect fetches our data from our database, you'll use it for this in 95% of your labs
  useEffect(() => {
    fetch('http://localhost:3002/raccoons')
    .then( res => res.json() )
    .then( data => setRaccoonsArr(data) )
  }, [])
  // the empty dependency array means this only fires once

  function addRaccoon( newRaccoonObject ) {
    // when we trigger `addRaccoon` we want to take the object and make a POST request
    fetch('http://localhost:3002/raccoons', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(newRaccoonObject)
    })
    .then( res => res.json() )
    .then( newRaccoonFromDB => setRaccoonsArr( [ ...raccoonsArr, newRaccoonFromDB ] ) )
    // newRaccoonFromDB has an ID because it's from the database
    // this is very important for map keys and for things like a DELETE request
  }

  // raccoonsArr will change after the fetch and get remapped when it does
  const mappedRaccoons = raccoonsArr.map( raccoon => <RaccoonCard key={raccoon.id} raccoon={raccoon} /> )

  return (
    <div className="raccoons-list border-black">

      <h2>🦝 Raccoons 🦝</h2>

      <RaccoonForm addRaccoon={addRaccoon} />

      <div className="flex">

        { mappedRaccoons }

      </div>

      <button onClick={ () => setCounter(counter + 1) }>Counter is: {counter}</button>

    </div>
  )
}

export default RaccoonsList
