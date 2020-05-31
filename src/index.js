import { Router } from '@reach/router';
import axios from 'axios';
import { createHashHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import '../src/assets/css/reset.css';
import '../src/assets/css/style.css';

import * as serviceWorker from './serviceWorker';
import { resetEditingState, setIdeaEditing, setMinionEditing } from './store/appState';
import { setIdeas } from './store/ideas';
import { setMeetings } from './store/meetings';
import { setMinions } from './store/minions';
import { setSelectedIdea } from './store/selectedIdea';
import { setSelectedMinion } from './store/selectedMinion';
import { setWork } from './store/work';

import AllIdeas from './components/AllIdeas';
import AllMinions from './components/AllMinions';
import App from './components/App';
import ContactUs from './components/ContactUs';
import CookiePolicy from './components/CookiePolicy';
import FourthContent from './components/fourth-content';
import FunctionComp2 from './components/FunctionComp2';
import Home from './components/Home';
import Idea from './components/Idea';
import Minion from './components/Minion';
import FifthPage from './components/FifthPage';

const appEnter = nextRouterState => {
  Promise.all([
    axios.get('http://localhost:4001/api/minions'),
    axios.get('http://localhost:4001/api/ideas'),
    axios.get('http://localhost:4001/api/meetings')
  ])
    .then(([minionsResponse, ideasResponse, meetingsResponse]) => {
      return [minionsResponse.data, ideasResponse.data, meetingsResponse.data]
    })
    .then(([minions, ideas, meetings]) => {
      store.dispatch(setMinions(minions))
      store.dispatch(setIdeas(ideas))
      store.dispatch(setMeetings(meetings))
    })
    .catch(console.error.bind(console))
}

const singleMinionEnter = nextRouterState => {
  store.dispatch(resetEditingState())
  console.log(nextRouterState);
  
  const id = nextRouterState.id
  axios
    .get(`http://localhost:4001/api/minions/${id}`)
    .then(res => res.data)
    .then(minion => {
      store.dispatch(setSelectedMinion(minion))
    })
    .catch(console.error.bind(console))

  axios
    .get(`http://localhost:4001/api/minions/${id}/work`)
    .then(res => res.data)
    .then(work => {
      store.dispatch(setWork(work))
    })
    .catch(console.error.bind(console))
}

const singleIdeaEnter = nextRouterState => {
  const id = nextRouterState.id
  axios
    .get(`http://localhost:4001/api/ideas/${id}`)
    .then(res => res.data)
    .then(idea => {
      store.dispatch(setSelectedIdea(idea))
    })
    .catch(console.error.bind(console))
}

const newIdeaEnter = () => {
  store.dispatch(setIdeaEditing())
  store.dispatch(
    setSelectedIdea({
      name: 'New Idea',
      description: '',
      weeklyRevenue: 0,
      numWeeks: 0
    })
  )
}

const newMinionEnter = () => {
  store.dispatch(setWork([]))
  store.dispatch(setMinionEditing())
  store.dispatch(
    setSelectedMinion({
      name: '',
      title: '',
      weaknesses: '',
      salary: 0
    })
  )
}

const allIdeasEnter = () => {
  store.dispatch(resetEditingState())
}

let history = createHashHistory({
  hashType: 'slash'
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App path='/' onEnter={appEnter()}>
        <Home path="/" />
        <FunctionComp2 path="/functionalComp2"/>
        <ContactUs path="/contactUs"/>
        <AllMinions path='/minions'/>
        <FifthPage path="/fifthPage"/>
        <Minion
          path='/minions/new'
          onEnter={newMinionEnter}
        />
        <Minion
          path='/minions/:id'
          onEnter={singleMinionEnter}
        />
        <AllIdeas path='/ideas' onEnter={allIdeasEnter()} />
        <Idea path='/ideas/new' onEnter={newIdeaEnter} />
        <Idea path='/ideas/:id' onEnter={singleIdeaEnter} />
        <CookiePolicy path="/cookiePolicy"/>
        <FourthContent path="/fourthContent"/>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
