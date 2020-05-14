import React, { Fragment } from 'react'
import styled from 'styled-components'

const BrewInput = styled.input`
  text-align: center;
  display: flex;
  width: ${props => props.theme.width};
  margin-bottom: 10px;
`

const BoilForm = ({ brew, handleArray, id }) => {
  const Console = prop => {
    console[Object.keys(prop)[0]](...Object.values(prop))
    return null
  }
  return (
    <Fragment>
      <Console log={brew} />
      <BrewInput
        index={id}
        theme={{ width: '40%' }}
        placeholder="What did you add"
        value={brew.boil[id] ? brew.boil[id].type : ''}
        name="type"
        onChange={(event) => handleArray(event, 'postBoil', id)}
      />

      <BrewInput
        index={id}
        theme={{ width: '40%' }}
        placeholder="How much did you add"
        value={brew.boil[id] ? brew.boil[id].quant : ''}
        name="quant"
        onChange={(event) => handleArray(event, 'postBoil', id)}
      />

    </Fragment>
  )
}

export default BoilForm
