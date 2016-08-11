var goals = [
  {id: 0, name: 'Nissan GT-R with NISMO wheels', cost: 120000, amount_saved: 1000, monthly_budget: 1000, time_left: 110},
  {id: 1, name: 'Scottish Fold Cat, grey color', cost: 500, amount_saved: 0, monthly_budget: 100, time_left: 5},
  {id: 2, name: 'Sewing Machine', cost: 100, amount_saved: 0, monthly_budget: 10, time_left: 10},
  {id: 3, name: "Harris' Soul", cost: 1, amount_saved: 0, monthly_budget: 1, time_left: 1},
  {id: 4, name: 'New Macbook Pro', cost: 1500, amount_saved: 100, monthly_budget: 100, time_left: 14},
  {id: 5, name: 'New Left Lung', cost: 1000000, amount_saved: 500000, monthly_budget: 100000, time_left: 5},
  {id: 6, name: 'One of those Japanese cheese tart things that everybody queues for three hours to get', cost: 3, amount_saved: 3, monthly_budget: 1, time_left: 0}
]

exports.findAll = function (req, res, next) {
  res.send(goals)
}

exports.findById = function (req, res, next) {
  var id = req.params.id
  res.send(goals[id])
}
