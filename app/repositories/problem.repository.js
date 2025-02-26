const logger = require('../config/logger.config');
const NotFound = require('../errors/notFound.error');
const { Problem } = require('../models');

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problemCreated = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return problemCreated;
    } catch (err) {
      throw err;
    }
  }

  async getAllproblems() {
    try {
      const allProblems = await Problem.find({});
      return allProblems;
    } catch (error) {
      throw error;
    }
  }

  async getproblem(problemId) {
    const problemData = await Problem.findById(problemId);
    if (!problemData) {
      throw new NotFound('Problem', problemId);
    }
    return problemData;
  }

  async deleteProblem(problemId) {
    const deletedProblem = await Problem.findByIdAndDelete(problemId);
    // console.log(deletedProblem);
    if (!deletedProblem) {
      // logger.error(
      //   `Problem.Repository: Problem with id: ${problemId} not found in the db`
      // );

      // Log a string message (no stack trace)
      // console.log('Hey');
      logger.error('This is a simple error message without a stack trace');

      // Log an object with stack
      // logger.error(new Error('Another error with a stack trace'));

      // Log a custom object
      // logger.error({ message: 'An error object with extra data', code: 500 });
      throw new NotFound('Problem', problemId);
    }
    return deletedProblem;
  }
}
module.exports = ProblemRepository;
