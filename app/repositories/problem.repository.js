const { Problem } = require('../models');

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problemCreated = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      console.log(problemCreated);
      return problemCreated;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = ProblemRepository;
