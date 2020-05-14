import React, { Fragment } from 'react'
import styled from 'styled-components'

const BrewInput = styled.input`
  text-align: center;
  display: flex;
  width: ${props => props.theme.width};
  margin-bottom: 10px;
`

const BoilForm = ({ brew, handleArray, id }) => {
  // const Console = prop => {
  //   console[Object.keys(prop)[0]](...Object.values(prop))
  //   return null
  // }
  return (
    <Fragment>
      {/* <Console log={brew} /> */}
      <BrewInput
        index={id}
        theme={{ width: '30%' }}
        placeholder="What did you add"
        value={brew.boil[id] ? brew.boil[id].type : ''}
        name="type"
        onChange={(event) => handleArray(event, 'boil', id)}
      />

      <BrewInput
        index={id}
        theme={{ width: '30%' }}
        placeholder="How much did you add"
        value={brew.boil[id] ? brew.boil[id].quant : ''}
        name="quant"
        onChange={(event) => handleArray(event, 'boil', id)}
      />

      <BrewInput
        index={id}
        theme={{ width: '30%' }}
        placeholder="How long did you boil for"
        value={brew.boil[id] ? brew.boil[id].duration : ''}
        name="duration"
        onChange={(event) => handleArray(event, 'boil', id)}
      />
    </Fragment>
  )
}

export default BoilForm
