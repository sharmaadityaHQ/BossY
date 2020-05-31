const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body
  const total = Number(numWeeks) * Number(weeklyRevenue)
  if (isNaN(total) || total < 1000000 || !numWeeks || !weeklyRevenue) {
    res.status(400).send()
  } else {
    next()
  }
}

// Leave this exports assignment so that the function can be used elsewhere
export default checkMillionDollarIdea
