const connection = require('./connection');

const create = async (task) => {
  return connection()
    .then((db) => db.collection('tasks').insertOne(task));
};

const getAll = async () => {
  return connection()
    .then((db) => db.collection('tasks').find().toArray());
};

module.exports = {
  create,
  getAll,
};
