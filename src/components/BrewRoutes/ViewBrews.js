import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'
import apiUrl from '../../apiConfig'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
    <Card key={brew._id} style={{ alignItems: 'center', width: '30%', marginTop: '10px' }}>
      <Card.Body>
        <Card.Title>{brew.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{brew.style.beerStyle}</Card.Subtitle>
        <Card.Text>
          Brew started on: {brew.dateStarted}
        </Card.Text>
        <Card.Link style={{ marginRight: '10px' }}href="#">View Recipe</Card.Link>
        <Button id={brew._id} onClick={destroy} variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  ))

  console.log(showBrews)
  console.log(brews)
  return (
    <div style={{ justifyContent: 'space-evenly', display: 'flex', flexWrap: 'wrap' }}>
      { showBrews }
    </div>
  )

  // const moviesJsx = movies.map(movie => (
  //   <li key={movie.id}>
  //     <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
  //   </li>
  // ))

  // return (
  //   <Layout>
  //     <h4>Movies</h4>
  //     <ul>
  //       {moviesJsx}
  //     </ul>
  //   </Layout>
  // )
}

export default withRouter(ViewBrews)
