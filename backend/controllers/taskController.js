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


module.exports = {
  create,
};
