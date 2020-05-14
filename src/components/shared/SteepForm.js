import React, { Fragment } from 'react'
import styled from 'styled-components'

const BrewInput = styled.input`
  text-align: center;
  display: flex;
  width: ${props => props.theme.width};
  margin-bottom: 10px;
`

const SteepForm = ({ brew, handleArray, id }) => {
  console.log(brew, 'steepform')
  return (
    <Fragment>
      <BrewInput
        key={id}
        theme={{ width: '30%' }}
        placeholder="What are you steeping"
        value={brew.steep[id].type}
        name="type"
        onChange={(event) => handleArray(event, 'steep', id)}
      />

      <BrewInput
        key={id}
        theme={{ width: '30%' }}
        placeholder="How much did you add"
        value={brew.steep[id].quant}
        name="steep[id].quant"
        onChange={handleArray}
      />

      <BrewInput
        key={id}
        theme={{ width: '30%' }}
        placeholder="How long did you steep for"
        value={brew.steep[id].duration}
        name="steep[id].duration"
        onChange={handleArray}
      />
    </Fragment>
  )
}

export default SteepForm
