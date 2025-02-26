const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');

const problemService = new ProblemService(new ProblemRepository());

async function addProblem(req, res, next) {
  try {
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

async function getProblem(req, res, next) {
  try {
    const problemData = await problemService.getProblem(req.params.id);
    if (problemData) {
      res.status(StatusCodes.OK).json({
        sucess: true,
        message: 'Problem has been retrieved for given id',
        err: {},
        data: problemData,
      });
    } else {
    }
  } catch (err) {
    next(err);
  }
}

async function getProblems(req, res, next) {
  try {
    const allProblems = await problemService.getProblems();
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'All problems are fetch',
      err: {},
      data: allProblems,
    });
  } catch (error) {
    throw error;
  }
}

function updateProblem(req, res) {
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ msg: 'Code not implemented yet' });
}

async function deleteProblem(req, res, next) {
  try {
    const deletedProblemData = await problemService.deleteProblem(
      req.params.id
    );
    res.status(StatusCodes.OK).json({
      sucess: true,
      message: 'Problem with given id has been deleted',
      err: {},
      data: deletedProblemData,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  updateProblem,
  deleteProblem,
};
