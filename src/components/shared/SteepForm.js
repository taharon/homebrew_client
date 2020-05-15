import React, { Fragment } from 'react'
import styled from 'styled-components'

const BrewInput = styled.input`
  text-align: center;
  display: flex;
  width: ${props => props.theme.width};
  margin-bottom: 10px;
`

const SteepForm = ({ brew, handleArray, id, edit }) => {
  // const Console = prop => {
  //   console[Object.keys(prop)[0]](...Object.values(prop))
  //   return null
  // }
  return (
    <Fragment>
      {/* <Console log={brew} /> */}
      <BrewInput
        disabled={edit}
        index={id}
        theme={{ width: '30%' }}
        placeholder="What are you steeping"
        value={brew.steep[id] ? brew.steep[id].type : ''}
        name="type"
        onChange={(event) => handleArray(event, 'steep', id)}
      />

      <BrewInput
        index={id}
        theme={{ width: '30%' }}
        disabled={edit}
        placeholder="How much did you add"
        value={brew.steep[id] ? brew.steep[id].quant : ''}
        name="quant"
        onChange={(event) => handleArray(event, 'steep', id)}
      />

      <BrewInput
        index={id}
        theme={{ width: '30%' }}
        disabled={edit}
        placeholder="How long did you steep for"
        value={brew.steep[id] ? brew.steep[id].duration : ''}
        name="duration"
        onChange={(event) => handleArray(event, 'steep', id)}
      />
    </Fragment>
  )
}

export default SteepForm
