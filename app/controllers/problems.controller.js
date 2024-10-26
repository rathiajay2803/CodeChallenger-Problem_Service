const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
const ServiceUnavailable = require('../errors/serviceUnavailable.error');

function addProblem(req, res, next) {
  try {
    console.log('It is comming here');
    throw new ServiceUnavailable(
      new Date(2024, 9, 24, 0, 0, 0).toLocaleString('en-IN'),
      new Date(2024, 9, 24, 9, 0, 0).toLocaleString('en-IN')
    );
  } catch (err) {
    // console.log(err);
    next(err);
  }
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
