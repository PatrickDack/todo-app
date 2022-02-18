const taskModel = require('../models/taskModel');

const create = async (task) => {
  const newTask = await taskModel.create(task);

  return newTask;
};

const getAll = async () => {
  const tasks = await taskModel.getAll();

  return tasks;
};

const remove = async (task) => {
  await taskModel.remove(task);
}

module.exports = {
  create,
  getAll,
  remove,
};
