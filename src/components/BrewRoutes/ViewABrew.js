import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import ViewABrewForm from '../shared/ViewABrewForm'
import messages from '../AutoDismissAlert/messages'

const ViewABrew = (props) => {
  const [brew, setBrew] = useState({})
  const [edit, setEdit] = useState(true)

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

  // edit function
  const handleSubmit = event => {
    event.preventDefault()
    const { id } = props.match.params
    const { msgAlert } = props
    axios({
      url: `${apiUrl}/brews/${id}`,
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      method: 'PATCH',
      data: { brew }
    })
      .then(() => msgAlert({
        heading: 'Success!',
        message: messages.submitSuccess,
        variant: 'success'
      }))
      .catch(console.error)
    setEdit(!edit)
  }

  // switch to edit
  const goToEdit = event => {
    event.preventDefault()
    setEdit(!edit)
  }

  useEffect(() => {
    const { id } = props.match.params
    axios({
      url: `${apiUrl}/brews/${id}`,
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      method: 'GET'
    })
      .then(res => {
        console.log(res.data.brew)
        setBrew(res.data.brew)
        console.log(res.data, 'data from api')
      })
      .catch(console.error)
  }, [edit])
  let showBrew
  if (Object.keys(brew).length) {
    if (!edit) {
      showBrew = <ViewABrewForm brew={brew} mode='Submit' edit={edit} cancelPath='/view-brews' handleChange={handleChange} handleSubmit={handleSubmit} handleArray={handleArray} />
    } else {
      showBrew = <ViewABrewForm brew={brew} mode='Edit' edit={edit} cancelPath='/view-brews' handleChange={handleChange} handleSubmit={goToEdit} handleArray={handleArray} />
    }
  } else {
    showBrew = 'Loading...'
  }
  return showBrew
}

export default withRouter(ViewABrew)
