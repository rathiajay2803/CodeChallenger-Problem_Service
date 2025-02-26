const { sanitizeMarkdownData } = require('../utils');

class ProblemService {
  constructor(ProblemRepository) {
    this.problemRepository = ProblemRepository;
  }

  async createProblem(problemData) {
    try {
      problemData.description = sanitizeMarkdownData(problemData.description);
      // console.log(problemData.description);

      const problem = await this.problemRepository.createProblem(problemData);

      return problem;
    } catch (error) {
      throw error;
    }
  }

  async getProblems() {
    try {
      const allProblems = await this.problemRepository.getAllproblems();
      return allProblems;
    } catch (err) {
      throw err;
    }
  }

  async getProblem(id) {
    const problemData = await this.problemRepository.getproblem(id);
    return problemData;
  }

  async deleteProblem(problemId) {
    const deletedData = await this.problemRepository.deleteProblem(problemId);
    return deletedData;
  }
}

module.exports = ProblemService;
