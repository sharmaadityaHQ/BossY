import React from 'react'
import Heading from './Heading'
import NavBar from './NavBar';

const App = ({children}) => {
  return (
    <div>
      <NavBar/>
      <Heading />
      <div id="content">
        { children }
      </div>
    </div>
  )
}

export default App;
