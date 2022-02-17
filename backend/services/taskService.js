const taskModel = require('../models/taskModel');

const create = async (task) => {
  const newTask = await taskModel.create(task);

  return newTask;
};

module.exports = {
  create,
};
