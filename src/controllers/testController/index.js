const catchAsync = require('../../utils/catchAsync');
// const { testService } = require('../../services');

const createTest = catchAsync(async (req, res) => {
  // const user = await testService.createtest(req.body);
  // res.send({ user });
});

module.exports = {
  createTest,
};
