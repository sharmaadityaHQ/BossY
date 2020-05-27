import React from 'react'
import { connect } from 'react-redux'
import { Link } from '@reach/router'

import { formatCash } from '../utils'

import IdeaListItem from './IdeaListItem'

import addButton from '../assets/img/add_button.svg'
import arrow from '../assets/img/arrow.svg'

const AllIdeas = ({ ideas }) => {
  const allIdeas = ideas.map(idea => {
    const income = formatCash(idea.weeklyRevenue * idea.numWeeks)
    return (
      <IdeaListItem
        key={idea.id}
        id={idea.id}
        name={idea.name}
        income={income}
      />
    )
  })

  const total = formatCash(
    ideas.reduce((accum, curr) => curr.weeklyRevenue * curr.numWeeks + accum, 0)
  )

  return (
    <div>
      <div id='ideas-landing'>
        <div className='label meetings-label'>Ideas</div>
        <table>
          <thead>
            <tr>
              <th id='th-time'>Name</th>
              <th id='th-location'>Income</th>
            </tr>
          </thead>
          <tbody>
            {allIdeas}
            <tr>
              <td />
              <td id='add-idea-td'>
                <Link to='/ideas/new'>
                  <img
                    id='add-idea'
                    className='button'
                    src={addButton}
                    alt='add minion'
                  />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div id='total-money'>
          <p>Total Money: {total}</p>
        </div>
      </div>
      <div className='button back-button'>
        <Link to='/'>
          <img className='button' src={arrow} alt='arrow' />
        </Link>
      </div>
    </div>
  )
}

const mapState = ({ ideas }) => ({ ideas })

export default connect(mapState)(AllIdeas)
