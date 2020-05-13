import React, { useState, useEffect } from 'react'
// import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SteepForm from './SteepForm'

const BrewInput = styled.input`
  text-align: center;
  display: flex;
  width: ${props => props.theme.width};
  margin-bottom: 10px;
`
const FormBrew = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const AddInputDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${props => props.theme.width};
  justify-content: space-around;
`

const BrewForm = ({ brew, setBrew, handleArray, handleSubmit, handleChange, cancelPath }) => {
  const [counter, setCounter] = useState({ steep: 0, boil: 0, postBoil: 0 })
  const [children, setChildren] = useState([])

  const addInput = (divName) => {
    setCounter(counter => ({ ...counter, [divName]: (counter[divName] + 1) }))
  }
  useEffect(() => {
    async function createNewSteep () {
      await setBrew([ ...brew.steep, { type: '', quant: '', duration: ' ' } ])
    }
    if (counter.steep !== 0) {
      createNewSteep()
      setChildren(children => [...children, { brew: brew }])
    }
  }, [counter.steep])
  return (<FormBrew onSubmit={handleSubmit}>
    <BrewInput
      theme={{ width: '85%' }}
      placeholder="Name your Brew"
      value={brew.name}
      name="name"
      onChange={handleChange}
    />

    <BrewInput
      theme={{ width: '85%' }}
      placeholder="When did you start"
      value={brew.dateStarted}
      name="dateStarted"
      onChange={handleChange}
    />

    <BrewInput
      theme={{ width: '40%' }}
      placeholder="What style is your brew"
      value={brew.style.beerStyle}
      name="style.beerStyle"
      onChange={handleChange}
    />

    <BrewInput
      theme={{ width: '40%' }}
      placeholder="How many gallons is your brew"
      value={brew.style.amount}
      name="style.amount"
      onChange={handleChange}
    />
    <AddInputDiv
      theme={{ width: '100%' }}
    >

      <BrewInput
        theme={{ width: '60%' }}
        placeholder="Steep"
        disabled={true}
        fontSize='2em'
      />

      <input
        type="button"
        style={{ 'marginBottom': '10px' }}
        value="Add something to steep"
        onClick={() => addInput('steep')}
      />

      {children.map((child, i) => {
        console.log(brew.steep, 'steep')
        return (<SteepForm brew={child.brew} handleArray={handleArray} key={i} />)
      })}
    </AddInputDiv>

    <br></br>

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </FormBrew>
  )
}

export default BrewForm
