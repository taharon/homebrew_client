import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'
import apiUrl from '../../apiConfig'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

// background: linear-gradient(0deg, rgba(69,26,0,1) 0%, rgba(131,82,10,1) 21%, rgba(213,167,99,1) 39%, rgba(244,226,224,1) 49%, rgba(242,229,216,1) 51%, rgba(245,231,229,1) 53%, rgba(213,167,99,1) 62%, rgba(131,82,10,1) 76%, rgba(69,26,0,1) 100%);
const PrettyCard = styled(Card)`
background: linear-gradient(0deg, rgba(69,26,0,1) 0%, rgba(131,82,10,1) 44%, rgba(213,167,99,1) 62%, rgba(244,226,224,1) 72%, rgba(242,229,216,1) 74%, rgba(245,231,229,1) 77%, rgba(213,167,99,1) 85%, rgba(131,82,10,1) 96%, rgba(69,26,0,1) 100%);
text-align: center;
width: 30%;
margin-top: 10px;
border-radius: 15px;
`

const ViewButton = styled(Button)`
background: #162700;
color: #8E9399;
outline: none;
border-style: none;
box-shadow: none;
&:focus, &:hover, &:active {
  outline: none;
  border-style: none;
  background: #162700;
  color: #8E9399;
}
`

const DeleteButton = styled(Button)`
background: #7B1E18;
color: #8E9399;
outline: none;
border-style: none;
box-shadow: none;
&:focus, &:hover, &:active {
  outline: none;
  border-style: none;
  background: #7B1E18;
  color: #8E9399;
}
`

const ViewBrews = (props) => {
  const [brews, setBrews] = useState([])
  const [deleted, setDeleted] = useState(false)

  const destroy = (event) => {
    event.persist()
    axios({
      url: `${apiUrl}/brews/${event.target.id}`,
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      method: 'DELETE'
    })
      .then(() => {
        const { msgAlert } = props
        msgAlert({
          heading: 'Successfully Deleted!',
          message: messages.successfulDeletion,
          variant: 'danger'
        })
      })
      .then(() => setDeleted(!deleted))
      .catch(console.error)
  }

  useEffect(() => {
    const { msgAlert } = props
    axios({
      url: `${apiUrl}/brews`,
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      method: 'GET'
    })
      .then(res => {
        setBrews(res.data.brews)
        return res
      })
      .then((res) => {
        if (!res.data.brews.length) {
          msgAlert({
            heading: 'No Brews!',
            message: messages.retrieveNoBrews,
            variant: 'danger'
          })
        }
      })
      .catch(console.error)
  }, [deleted])

  const showBrews = brews.map((brew, i) => (
    <PrettyCard key={brew._id} >
      <Card.Body>
        <Card.Title>{brew.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{brew.style.beerStyle}</Card.Subtitle>
        <Card.Text>
          Brew started on: {brew.dateStarted}
        </Card.Text>
        <Link to={ `/view-a-brew/${brew._id}` } style={{ marginRight: '10px' }}><ViewButton >View Recipe</ViewButton></Link>
        <DeleteButton id={brew._id} onClick={destroy} >Delete</DeleteButton>
      </Card.Body>
    </PrettyCard>
  ))

  console.log(brews)
  return (
    <div style={{ justifyContent: 'space-evenly', display: 'flex', flexWrap: 'wrap' }}>
      { showBrews }
    </div>
  )
}

export default withRouter(ViewBrews)
