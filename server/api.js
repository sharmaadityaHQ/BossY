import express from 'express';
const apiRouter = express.Router();

import {
  addToDatabase,
  getAllFromDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
  createMeeting
} from './db'

import checkMillionDollarIdea from './checkMillionDollarIdea'

apiRouter.get('/minions', (req, res, next) => {
  const minions = getAllFromDatabase('minions')
  if (minions) {
    res.status(200).send(minions)
  } else {
    res.status(404).send('No minions found')
  }
})

apiRouter.post('/minions', (req, res, next) => {
  const added = addToDatabase('minions', req.body)
  if (added) {
    res.status(201).send(added)
  } else {
    res.status(400).send()
  }
})

apiRouter.get('/minions/:minionId', (req, res, next) => {
  const minion = getFromDatabaseById('minions', req.params.minionId)
  if (minion) {
    res.send(minion)
  } else {
    res.status(404).send('Minion does not exist')
  }
})

apiRouter.put('/minions/:minionId', (req, res, next) => {
  const updatedMinion = updateInstanceInDatabase('minions', req.body)
  if (updatedMinion) {
    res.send(updatedMinion)
  } else {
    res.status(404).send('Minion does not exist')
  }
})

apiRouter.delete('/minions/:minionId', (req, res, next) => {
  const deleteMinion = deleteFromDatabasebyId('minions', req.params.minionId)
  if (deleteMinion) {
    res.status(204).send()
  } else {
    res.status(404).send('Minion does not exist')
  }
})

apiRouter.get('/ideas', (req, res, next) => {
  const ideas = getAllFromDatabase('ideas')
  if (ideas) {
    res.status(200).send(ideas)
  } else {
    res.status(404).send('No ideas found')
  }
})

apiRouter.post('/ideas', checkMillionDollarIdea, (req, res, next) => {
  const added = addToDatabase('ideas', req.body)
  if (added) {
    res.status(201).send(added)
  } else {
    res.status(400).send()
  }
})

apiRouter.get('/ideas/:ideaId', (req, res, next) => {
  const idea = getFromDatabaseById('ideas', req.params.ideaId)
  if (idea) {
    res.send(idea)
  } else {
    res.status(404).send('Idea does not exist')
  }
})

apiRouter.put('/ideas/:ideaId', (req, res, next) => {
  const updatedIdea = updateInstanceInDatabase('ideas', req.body)
  if (updatedIdea) {
    res.send(updatedIdea)
  } else {
    res.status(404).send('Idea does not exist')
  }
})

apiRouter.delete('/ideas/:ideaId', (req, res, next) => {
  const deleteIdea = deleteFromDatabasebyId('ideas', req.params.ideaId)
  if (deleteIdea) {
    res.status(204).send()
  } else {
    res.status(404).send('Idea does not exist')
  }
})

apiRouter.get('/meetings', (req, res, next) => {
  const meetings = getAllFromDatabase('meetings')
  if (meetings) {
    res.status(200).send(meetings)
  } else {
    res.status(404).send('No meetings found')
  }
})

apiRouter.post('/meetings', (req, res, next) => {
  req.body = createMeeting()
  const added = addToDatabase('meetings', req.body)
  if (added) {
    res.status(201).send(added)
  } else {
    res.status(400).send()
  }
})

apiRouter.delete('/meetings', (req, res, next) => {
  const deleted = deleteAllFromDatabase('meetings')
  if (deleted) {
    res.status(204).send()
  } else {
    res.status(404).send('Meeetings do not exist')
  }
})

apiRouter.get('/minions/:minionId/work', (req, res, next) => {
  const allWork = getAllFromDatabase('work')
  let array = []
  for (let i = 0; i < allWork.length; i++) {
    if (Number(allWork[i].minionId) === Number(req.params.minionId)) {
      array.push(allWork[i])
    }
  }
  if (array.length) {
    res.status(200).send(array)
  } else {
    res.status(404).send()
  }
})

apiRouter.post('/minions/:minionId/work', (req, res, next) => {
  if (req.params.minionId) {
    addToDatabase('work', req.body)
    res.status(201).send(req.body)
  } else {
    res.status(400).send()
  }
})

apiRouter.put('/minions/:minionId/work/:workId', (req, res, next) => {
  let min,
    wor,
    f = 0
  const allWork = getAllFromDatabase('work')
  for (let i = 0; i < allWork.length; i++) {
    min = Number(allWork[i].minionId) === Number(req.params.minionId)
    wor = Number(allWork[i].id) === Number(req.params.workId)
    if (min && wor) {
      f = 1
      const updated = updateInstanceInDatabase('work', req.body)
      res.send(updated)
    }
  }
  if (f == 0 && req.params.minionId !== req.params.workId) {
    res.status(400).send()
  } else {
    res.status(404).send()
  }
})

apiRouter.delete('/minions/:minionId/work/:workId', (req, res, next) => {
  const deleted = deleteFromDatabasebyId('work', req.params.workId)
  if (deleted) {
    res.status(204).send()
  } else {
    res.status(404).send()
  }
})

export default apiRouter
