import React, { useState, useEffect } from 'react'
// import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SteepForm from './SteepForm'
import BoilForm from './BoilForm'
import PostBoilForm from './PostBoilForm'

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

  // const Console = prop => {
  //   console[Object.keys(prop)[0]](...Object.values(prop))
  //   return null
  // }

  const addInput = (divName) => {
    setCounter(counter => ({ ...counter, [divName]: (counter[divName] + 1) }))
  }
  useEffect(() => {
    if (counter.steep) {
      setBrew({ ...brew, steep: [ ...brew.steep, { type: '', quant: '', duration: '' } ] })
    }
  }, [counter.steep])
  useEffect(() => {
    if (counter.boil) {
      setBrew({ ...brew, boil: [ ...brew.boil, { type: '', quant: '', duration: '' } ] })
    }
  }, [counter.boil])
  useEffect(() => {
    if (counter.postBoil) {
      setBrew({ ...brew, postBoil: [ ...brew.postBoil, { type: '', quant: '' } ] })
    }
  }, [counter.postBoil])
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
    {/* <Console log={brew} /> */}

    <BrewInput
      theme={{ width: '40%' }}
      placeholder="What style is your brew"
      value={brew.style.beerStyle}
      name="beerStyle"
      onChange={(event) => handleChange(event, 'style')}
    />

    <BrewInput
      theme={{ width: '40%' }}
      placeholder="How many gallons is your brew"
      value={brew.style.amount}
      name="amount"
      onChange={(event) => handleChange(event, 'style')}
    />
    <AddInputDiv
      theme={{ width: '100%' }}
    >

      <BrewInput
        theme={{ width: '60%' }}
        placeholder="Steep"
        disabled={true}
        style={{ 'fontSize': '25px' }}
      />

      <input
        type="button"
        style={{ 'marginBottom': '10px' }}
        value="Add something to steep"
        onClick={() => addInput('steep')}
      />

      {brew.steep.map((child, i) => {
        return (<SteepForm brew={brew} handleArray={handleArray} key={i} id={i} />)
      })}
    </AddInputDiv>

    <AddInputDiv
      theme={{ width: '100%' }}
    >

      <BrewInput
        theme={{ width: '35%' }}
        placeholder="Boil"
        disabled={true}
        style={{ 'fontSize': '25px' }}
      />

      <BrewInput
        theme={{ width: '35%' }}
        placeholder="Duration of Boil"
        value={brew.boilTime}
        name="boilTime"
        onChange={(event) => handleChange(event)}
      />

      <input
        type="button"
        style={{ 'marginBottom': '10px' }}
        value="Add something to the boil"
        onClick={() => addInput('boil')}
      />

      {brew.boil.map((child, i) => {
        return (<BoilForm brew={brew} handleArray={handleArray} key={i} id={i} />)
      })}
    </AddInputDiv>

    <AddInputDiv
      theme={{ width: '100%' }}
    >

      <BrewInput
        theme={{ width: '60%' }}
        placeholder="Post Boil"
        disabled={true}
        style={{ 'fontSize': '25px' }}
      />

      <input
        type="button"
        style={{ 'marginBottom': '10px' }}
        value="Add something post boil"
        onClick={() => addInput('postBoil')}
      />

      {brew.postBoil.map((child, i) => {
        return (<PostBoilForm brew={brew} handleArray={handleArray} key={i} id={i} />)
      })}

      <BrewInput
        theme={{ width: '85%' }}
        placeholder="Primary duration"
        value={brew.primary}
        name="primary"
        onChange={handleChange}
      />

      <BrewInput
        theme={{ width: '85%' }}
        placeholder="Secondary duration (if any)"
        value={brew.secondary}
        name="secondary"
        onChange={handleChange}
      />
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
