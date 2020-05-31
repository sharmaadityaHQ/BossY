import React,{ useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from '@reach/router'

import { updateMinionThunk, createMinionThunk } from '../store/minions'

import Work from './Work'
import MinionDescription from './MinionDescription'
import MinionEdit from './MinionEdit'
import Arrow from '../assets/img/arrow.svg'

const Minion = (props) => {
  let editing = props.newMinion ? true : false
  const [state, setState] = useState({
      editing: editing,
      minion: props.minion
  })

  useEffect(() => {
      setState({
        minion: props.minion
      })
    }, [props.minion])

  const handleChange = e => {
      setState({
          ...state,
          minion: Object.assign(state.minion, {
          [e.target.name]: e.target.value
        })
      })
  }  

  const toggleEdit = e => {
      if (state.editing) {
        if (props.newMinion) {
          props.createMinion(state.minion)
        } else {
          props.updateMinion(state.minion)
        }
      }
      setState({
          editing: !this.state.editing
        })
  }  
  
return (
    <div>
      <div id='single-minion-landing'>
        <div className='minion-details'>
          <div className='label meetings-label'>
            {props.newMinion
              ? `New Minion`
              : `Minion Id #${state.minion.id}`}
          </div>
          <div className='minion-description'>
            {state.editing ? (
              <MinionEdit
                handleChange={handleChange}
                {...props.minion}
              />
            ) : (
              <MinionDescription {...props.minion} />
            )}
          </div>
          <div
            className='button minion-save-button'
            onClick={toggleEdit}
          >
            {state.editing ? 'Save' : 'Edit'}
          </div>
        </div>
        <div className='work-details'>
          <Work />
        </div>
      </div>
      <div className='button back-button'>
        <Link to='/minions'>
          <img className='button' src={Arrow} alt='arrow' />
        </Link>
      </div>
    </div>
  )
}

const mapState = ({ selectedMinion, appState }) => ({
    minion: selectedMinion,
    newMinion: appState.editingNewMinion
  })
  
  const mapDispatch = dispatch => ({
    updateMinion: minion => {
      dispatch(updateMinionThunk(minion))
    },
    createMinion: minion => {
      dispatch(createMinionThunk(minion))
    }
  })

export default connect(mapState, mapDispatch)(Minion)  