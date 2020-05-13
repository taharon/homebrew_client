import React, { Fragment } from 'react'
import styled from 'styled-components'

const BrewInput = styled.input`
  text-align: center;
  display: flex;
  width: ${props => props.theme.width};
  margin-bottom: 10px;
`

const SteepForm = ({ brew, handleArray, id }) => (
  <Fragment>
    <BrewInput
      key={id}
      theme={{ width: '30%' }}
      placeholder="What are you steeping"
      value={brew.steep[id].type}
      name="brew.steep[id].type"
      onChange={handleArray}
    />

    <BrewInput
      key={id}
      theme={{ width: '30%' }}
      placeholder="How much did you add"
      value={brew.steep[id].quant}
      name="brew.steep[id].quant"
      onChange={handleArray}
    />

    <BrewInput
      key={id}
      theme={{ width: '30%' }}
      placeholder="How long did you steep for"
      value={brew.steep[id].duration}
      name="brew.steep[id].duration"
      onChange={handleArray}
    />
  </Fragment>
)

export default SteepForm
