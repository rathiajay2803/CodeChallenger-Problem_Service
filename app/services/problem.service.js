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
}

module.exports = ProblemService;
