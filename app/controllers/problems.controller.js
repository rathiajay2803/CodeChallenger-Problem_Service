const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');

const problemService = new ProblemService(new ProblemRepository());

async function addProblem(req, res, next) {
  try {
    console.log(req.body);
    const newProblem = await problemService.createProblem(req.body);
    res.status(StatusCodes.CREATED).json({
      sucess: true,
      message: 'New Problem has been created succesfully',
      err: {},
      data: newProblem,
    });
  } catch (err) {
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
