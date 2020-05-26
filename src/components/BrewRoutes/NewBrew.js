import React, { useState } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import BrewForm from '../shared/BrewForm'
import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'

const NewBrew = (props) => {
  // { type: '', time: '', quantity: '' } generically for all 3 (steep, boil, post)
  const [brew, setBrew] = useState({ name: '', dateStarted: '', style: { beerStyle: '', amount: '' }, steep: [], boilTime: '', boil: [], postBoil: [], primary: '', secondary: '', tastingNotes: '' })
  const [createdBrewId, setCreatedBrewId] = useState(null)

  const handleChange = (event, extra) => {
    if (!extra) {
      setBrew({ ...brew, [event.target.name]: event.target.value })
    } else {
      setBrew({ ...brew, [extra]: { ...brew[extra], [event.target.name]: event.target.value } })
    }
  }

  const handleArray = (event, extra, index) => {
    event.persist()
    const updatedField = { ...brew[extra][index], [event.target.name]: event.target.value }
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
    const { msgAlert } = props
    axios({
      url: `${apiUrl}/brews`,
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      method: 'POST',
      data: { brew }
    })
      .then(res => setCreatedBrewId(res.data.brew._id) )
      .then(() => msgAlert({
        heading: 'Success!',
        message: messages.createBrewSuccess,
        variant: 'success'
      }))
      .catch(console.error)
  }

  if (createdBrewId) {
    return <Redirect to={'/'} />
  }

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

export default withRouter(NewBrew)
