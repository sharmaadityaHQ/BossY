import { Link } from '@reach/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Arrow from '../assets/img/arrow.svg';
import { createIdeaThunk, updateIdeaThunk } from '../store/ideas';
import { isMillionDollarIdea } from '../utils';
import IdeaDescription from './IdeaDescription';
import IdeaEdit from './IdeaEdit';

const Idea = (props) => {

  useEffect(() => {
    props.id ? props.onEnter({ id: props.id }) : props.onEnter();
  },[props]);

  let editing = props.newIdea ? true : false
  const [state, setState] = useState({
    editing: editing,
    idea: props.idea
  })

  useEffect(() => {
    setState({
      ...state,
      idea: props.idea
    })
  }, [props.idea, state])

  const handleChange = e => {
    setState({
      ...state,
      idea: Object.assign(state.idea, {
        [e.target.name]: e.target.value
      })
    })    
  }

 const toggleEdit = e => {
    if (state.editing) {
      if (props.newIdea) {
        props.createIdea(state.idea)
      } else {
        props.updateIdea(state.idea)
      }
    }
    setState({
      ...state,
      editing: !state.editing
    })
  }

  const isValid = isMillionDollarIdea(
    state.idea.weeklyRevenue,
    state.idea.numWeeks
  )
  const buttonText = state.editing
    ? isValid
      ? 'Save'
      : 'Not A Valid $1000000 Idea!'
    : 'Edit'
    
  return (
    <div>
      <div id='single-idea-landing'>
        {state.editing ? (
          <IdeaEdit idea={props.idea} handleChange={handleChange} />
        ) : (
          <IdeaDescription idea={props.idea} />
        )}
        <div
          id='save-idea'
          className={
            isValid ? 'button save-button' : 'button save-button disabled'
          }
          onClick={isValid ? toggleEdit : () => {}}
        >
          {buttonText}
        </div>
      </div>
      <div className='button back-button'>
        <Link to='/ideas'>
          <img className='button' src={Arrow} alt='arrow' />
        </Link>
      </div>
    </div>
  )
}

const mapState = ({ selectedIdea, appState }) => ({
  idea: selectedIdea,
  newIdea: appState.editingNewIdea
})

const mapDispatch = dispatch => ({
  updateIdea: idea => {
    dispatch(updateIdeaThunk(idea))
  },
  createIdea: idea => {
    dispatch(createIdeaThunk(idea))
  }
})

export default connect(mapState, mapDispatch)(Idea)
