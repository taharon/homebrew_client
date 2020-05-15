import React, { Fragment } from 'react'
import styled from 'styled-components'

const BrewInput = styled.input`
  text-align: center;
  display: flex;
  width: ${props => props.theme.width};
  margin-bottom: 10px;
`

const BoilForm = ({ brew, handleArray, id, edit }) => {
  // const Console = prop => {
  //   console[Object.keys(prop)[0]](...Object.values(prop))
  //   return null
  // }
  return (
    <Fragment>
      {/* <Console log={brew} /> */}
      <BrewInput
        index={id}
        theme={{ width: '40%' }}
        disabled={edit}
        placeholder="What did you add"
        value={brew.postBoil[id] ? brew.postBoil[id].type : ''}
        name="type"
        onChange={(event) => handleArray(event, 'postBoil', id)}
      />

      <BrewInput
        index={id}
        theme={{ width: '40%' }}
        disabled={edit}
        placeholder="How much did you add"
        value={brew.postBoil[id] ? brew.postBoil[id].quant : ''}
        name="quant"
        onChange={(event) => handleArray(event, 'postBoil', id)}
      />

    </Fragment>
  )
}

export default BoilForm
