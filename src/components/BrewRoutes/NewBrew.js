import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom'
import axios from 'axios'
import BrewForm from '../shared/BrewForm'
import apiUrl from '../../apiConfig'

const NewBrew = (props) => {
  // { type: '', time: '', quantity: '' } generically for all 3 (steep, boil, post)
  const [brew, setBrew] = useState({ name: '', dateStarted: '', style: { beerStyle: '', amount: '' }, steep: [], boilTime: '', boil: [], postBoil: [], primary: '', secondary: '', tastingNotes: '' })
  // const [createdBrew, setCreatedBrewId] = useState(null)

  const handleChange = (event, extra) => {
    console.log(brew)
    if (!extra) {
      setBrew({ ...brew, [event.target.name]: event.target.value })
    } else {
      setBrew({ ...brew, [extra]: { ...brew[extra], [event.target.name]: event.target.value } })
    }
  }

  const handleArray = (event, extra, index) => {
    event.persist()
    const updatedField = { ...brew[extra][index], [event.target.name]: event.target.value }
    // { type: 'd', otherestuff }
    setBrew(brew => {
      const newArray = brew[extra].map((item, i) => {
        if (i === index) {
          item = updatedField
        }
        return item
      })
      return { ...brew, [extra]: newArray }
    })
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
