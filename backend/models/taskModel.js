const connection = require('./connection');

const create = async (task) => {
  return connection()
    .then((db) => db.collection('tasks').insertOne(task));
};

module.exports = {
  create,
};
