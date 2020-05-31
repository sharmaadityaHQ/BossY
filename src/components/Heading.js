import React from 'react'
import { Link } from '@reach/router'
import Logo from '../assets/img/logo.svg'

const Heading = () => {
  const changeMode = () => {
    // TODO: change the mode between day and night
    console.log("mode changed");
  }
  return (
    <div id='heading'>
      <div className="change-theme">
        <label className="switch">
          <input type="checkbox" onClick={changeMode} />
            <span className="slider round"></span>
        </label>
      </div>
      <div id='logo'>
        <Link to='/'>
          <img id='logo-img' className='button' src={Logo} alt='logo' />
        </Link>
      </div>
      <div id='title'>
        <Link to='/'>
          <span className='button'>Boss Machine</span>
        </Link>
      </div>
    </div>
  )
}

export default Heading
