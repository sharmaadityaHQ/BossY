import React from 'react'
import { Link } from '@reach/router'
import Logo from '../assets/img/logo.svg'

const Heading = () => {
  return (
    <div id='heading'>
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
