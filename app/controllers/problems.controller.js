const StatusCodes = require('http-status-codes');

function addProblem(req, res) {
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ msg: 'Code not implemented yet' });
}

function getProblem(req, res) {
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ msg: 'Code not implemented yet' });
}

function getProblems(req, res) {
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ msg: 'Code not implemented yet' });
}

function updateProblem(req, res) {
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ msg: 'Code not implemented yet' });
}

function deleteProblem(req, res) {
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ msg: 'Code not implemented yet' });
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  updateProblem,
  deleteProblem,
};
