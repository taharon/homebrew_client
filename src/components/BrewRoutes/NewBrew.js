import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom'
import axios from 'axios'
import BrewForm from '../shared/BrewForm'
import apiUrl from '../../apiConfig'

const NewBrew = (props) => {
  // const [brew, setBrew] = useState({ name: '', dateStarted: '', style: { style: '', amount: '' }, steep: { type: '', quant: '', time: '' }, boil: '', sugar: { type: '', quant: '', style: '' }, hop: { type: '', quant: '', time: '' }, post: { thing: '', quant: '' }, yeast: { thing: '', quant: '' }, primary: '', secondary: '' })
  const [brew, setBrew] = useState({ name: '', dateStarted: '', style: { style: '', amount: '' }, steep: [], boil: { time: '', additions: [] }, postBoil: [], tastingNotes: '' })
  // const [createdBrew, setCreatedBrewId] = useState(null)

  const handleChange = event => {
    event.persist()
    setBrew(brew => ({ ...brew, [event.target.name]: event.target.value }))
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
      cancelPath="/"
    />
  )
}

export default NewBrew
