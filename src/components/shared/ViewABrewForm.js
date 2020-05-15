import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SteepForm from './SteepForm'
import BoilForm from './BoilForm'
import PostBoilForm from './PostBoilForm'
import Form from 'react-bootstrap/Form'

const BrewInput = styled.input`
  text-align: center;
  display: flex;
  width: ${props => props.theme.width};
  margin-bottom: 10px;
`

const CreatorComment = styled.textarea`
  display: flex;
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

const BrewForm = ({ brew, handleArray, handleSubmit, handleChange, edit, cancelPath, mode }) => {
  console.log(brew)
  // const counter = { steep: brew.steep.length, boil: brew.boil.length, postBoil: brew.postBoil.length }

  // const addInput = (divName) => {
  //   setCounter(counter => ({ ...counter, [divName]: (counter[divName] + 1) }))
  // }

  return (<FormBrew onSubmit={handleSubmit}>
    <BrewInput
      theme={{ width: '85%' }}
      disabled={edit}
      placeholder="Name your Brew"
      value={brew.name}
      name="name"
      onChange={handleChange}
    />

    <BrewInput
      theme={{ width: '85%' }}
      disabled={edit}
      placeholder="When did you start"
      value={brew.dateStarted}
      name="dateStarted"
      onChange={handleChange}
    />

    <BrewInput
      theme={{ width: '40%' }}
      disabled={edit}
      placeholder="What style is your brew"
      value={brew.style.beerStyle}
      name="beerStyle"
      onChange={(event) => handleChange(event, 'style')}
    />

    <BrewInput
      theme={{ width: '40%' }}
      disabled={edit}
      placeholder="How many gallons is your brew"
      value={brew.style.amount}
      name="amount"
      onChange={(event) => handleChange(event, 'style')}
    />
    <AddInputDiv
      theme={{ width: '100%' }}
    >

      <BrewInput
        theme={{ width: '85%' }}
        placeholder="Steep"
        disabled={true}
        style={{ 'fontSize': '25px' }}
      />

      {brew.steep.map((child, i) => {
        return (<SteepForm brew={brew} edit={edit} handleArray={handleArray} key={i} id={i} />)
      })}
    </AddInputDiv>

    <AddInputDiv
      theme={{ width: '100%' }}
    >

      <BrewInput
        theme={{ width: '40%' }}
        placeholder="Boil"
        disabled={true}
        style={{ 'fontSize': '25px' }}
      />

      <BrewInput
        theme={{ width: '40%' }}
        disabled={edit}
        placeholder="Duration of Boil"
        value={brew.boilTime}
        name="boilTime"
        onChange={(event) => handleChange(event)}
      />

      {brew.boil.map((child, i) => {
        return (<BoilForm brew={brew} edit={edit} handleArray={handleArray} key={i} id={i} />)
      })}
    </AddInputDiv>

    <AddInputDiv
      theme={{ width: '100%' }}
    >

      <BrewInput
        theme={{ width: '85%' }}
        placeholder="Post Boil"
        disabled={true}
        style={{ 'fontSize': '25px' }}
      />

      {brew.postBoil.map((child, i) => {
        return (<PostBoilForm brew={brew} edit={edit} handleArray={handleArray} key={i} id={i} />)
      })}

      <BrewInput
        theme={{ width: '85%' }}
        disabled={edit}
        placeholder="Primary duration"
        value={brew.primary}
        name="primary"
        onChange={handleChange}
      />

      <BrewInput
        theme={{ width: '85%' }}
        disabled={edit}
        placeholder="Secondary duration (if any)"
        value={brew.secondary}
        name="secondary"
        onChange={handleChange}
      />
    </AddInputDiv>
    <AddInputDiv theme={{ width: '100%' }}>
      <CreatorComment
        rows='5'
        cols='90'
        disabled={edit}
        placeholder="Tasting notes"
        value={brew.tastingNotes}
        name='tastingNotes'
        onChange={handleChange}
      />
    </AddInputDiv>
    <Form.Group style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      <button type="submit">{mode}</button>
      <Link to={cancelPath}>
        <button>Cancel</button>
      </Link>
    </Form.Group>
  </FormBrew>
  )
}

export default BrewForm
