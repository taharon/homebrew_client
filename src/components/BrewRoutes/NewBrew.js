import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom'
import axios from 'axios'
import BrewForm from '../shared/BrewForm'
import apiUrl from '../../apiConfig'

const NewBrew = (props) => {
  // { type: '', time: '', quantity: '' } generically for all 3 (steep, boil, post)
  const [brew, setBrew] = useState({ name: '', dateStarted: '', style: { beerStyle: '', amount: '' }, steep: [], boilTime: '', boil: [], postBoil: [], tastingNotes: '' })
  // const [createdBrew, setCreatedBrewId] = useState(null)

  const handleChange = event => {
    console.log(brew)
    setBrew({ ...brew, [event.target.name]: event.target.value })
  }

  const handleArray = event => {
    console.log(event.target.name)
    setBrew({ ...brew, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/brew`,
      method: 'POST',
      data: { brew }
    })
      // .then(res => setCreatedBrewId(res.data.movie.id))
      .catch(console.error)
  }

  // if (createdMovieId) {
  //   return <Redirect to={`/brew/${createdMovieId}`} />
  // }

  return (
    <BrewForm
      brew={brew}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleArray={handleArray}
      setBrew={setBrew}
      cancelPath="/"
    />
  )
}

export default NewBrew
