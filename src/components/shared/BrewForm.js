import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const brewInput = styled.input`
  display: flex;
  width: { props => props.theme.width };
  justify-content: space-evenly;
`
const brewForm = styled.form`
  display: flex
`

const BrewForm = ({ brew, handleArray, handleSubmit, handleChange, cancelPath }) => (
  <brewForm onSubmit={handleSubmit}>
    <brewInput
      theme={{ width: '85%' }}
      placeholder="Name your Brew"
      value={brew.name}
      tag="name"
      onChange={handleChange}
    />

    <brewInput
      theme={{ width: '85%' }}
      placeholder="When did you start"
      value={brew.dateStarted}
      tag="dateStarted"
      onChange={handleChange}
    />

    <brewInput
      theme={{ width: '40%' }}
      placeholder="What style is your brew"
      value={brew.style.style}
      tag="style.style"
      onChange={handleChange}
    />

    <brewInput
      theme={{ width: '40%' }}
      placeholder="How many gallons is your brew"
      value={brew.style.amount}
      tag="style.amount"
      onChange={handleChange}

    <brewInput
      theme={{ width: '30%' }}
      placeholder="What are you steeping"
      value={brew.style.style}
      tag="style.style"
      onChange={handleArray}
    />

    <brewInput
      theme={{ width: '30%' }}
      placeholder="How much did you add"
      value={brew.style.amount}
      tag="style.amount"
      onChange={handleArray}
    />

    <brewInput
      theme={{ width: '30%' }}
      placeholder="How long did you steep for"
      value={brew.style.amount}
      tag="style.amount"
      onChange={handleArray}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </brewForm>
)

export default BrewForm
