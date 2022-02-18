const taskService = require('../services/taskService');

const create = async (req, res, _next) => {
  const task = req.body;

  try {
    const newTask = await taskService.create(task);

    return res.status(201).json(newTask);
  } catch (error) {
    console.log(error.message);
  }
};

const getAll = async (req, res, _next) => {
  try {
    const tasks = await taskService.getAll();

    return res.status(200).json(tasks);
  } catch (error) {
    console.log(error.message);
  }
}

const remove = async (req, res, _next) => {
  const { id } = req.params;

  try {
    await taskService.remove(id);

    return res.status(204).json({ message: "Task has been deleted successfully"});
  } catch (error) {
    console.log(error.message)
  }
}


module.exports = {
  create,
  getAll,
  remove,
};
