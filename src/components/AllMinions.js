import React from 'react'
import { Link } from '@reach/router'
import { connect } from 'react-redux'

import { deleteMinionThunk } from '../store/minions'
import Minion from '../assets/img/minion.svg'
import xButton from '../assets/img/x_button.svg'
import addButton from '../assets/img/add_button.svg'
import Arrow from '../assets/img/arrow.svg'

const AllMinions = props => {
  const minions = props.minions.map(minion => {
    let name = minion.name.match(/.{1,11}/g).join('\n')
    return (
      <div className='minion-grid' key={minion.id}>
        <Link to={`/minions/${minion.id}`}>
          <img className='button minion-thumbnail' src={Minion} alt='minion' />
          <p>{name}</p>
          <p>ID #{minion.id}</p>
        </Link>
        <img
          onClick={() => props.deleteMinion(minion.id)}
          className='button x-button'
          src={xButton}
          alt=''
        />
      </div>
    )
  })

  return (
    <div>
      <div id='minions-landing'>
        <div id='minions-title' className='label minions-label'>
          MINIONS.exe
        </div>
        <div id='all-minions'>
          {minions}
          <div id='add-minion-button-grid' className='minion-grid'>
            <Link to='/minions/new'>
              <img
                id='add-minion-button'
                className='button'
                src={addButton}
                alt=''
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='button back-button'>
        <Link to='/'>
          <img className='button' src={Arrow} alt='arrow' />
        </Link>
      </div>
    </div>
  )
}

const mapState = ({ minions }) => ({
  minions
})

const mapDispatch = dispatch => ({
  deleteMinion: minionId => {
    dispatch(deleteMinionThunk(minionId))
  }
})

export default connect(mapState, mapDispatch)(AllMinions)
