import React from 'react'
import { connect } from 'react-redux'
import { Link } from '@reach/router'

import { cancelMeetingsThunk } from '../store/meetings'

import AllMeetings from './AllMeetings'
import minionIcon from '../assets/img/minion_icon_home.svg'
import minionMoney from '../assets/img/minion_icon_money.svg'
import Footer from './Footer';

const Home = ({ cancelMeetings }) => {
  return (
    <div id='landing-page'>
      <div id='launch-buttons'>
        <Link to='/minions'>
          <div id='minions-launch' className='button launch-button'>
            <img className='button launch-icon' src={minionIcon} alt='' />
            <div className='button label launch-label'>MINIONS.exe</div>
          </div>
        </Link>
        <Link to='/ideas'>
          <div id='ideas-launch' className='button launch-button'>
            <img className='button launch-icon' src={minionMoney} alt='' />
            <div className='button label launch-label'>MILLION $ IDEAS.exe</div>
          </div>
        </Link>
      </div>
      <AllMeetings />
      <div id='meetings-cancel' className='button' onClick={cancelMeetings}>
        Cancel All
      </div>
      <Footer/>
    </div>
  )
}

const mapDispatch = dispatch => ({
  cancelMeetings: () => {
    dispatch(cancelMeetingsThunk())
  }
})

export default connect(null, mapDispatch)(Home)
