const connection = require('./connection');

const create = async (task) => {
  return connection()
    .then((db) => db.collection('tasks').insertOne(task));
};

const getAll = async () => {
  return connection()
    .then((db) => db.collection('tasks').find().toArray());
};

const remove = async (task) => {
  console.log(task);
  await connection()
    .then((db) => db.collection('tasks').deleteOne(task));
}

module.exports = {
  create,
  getAll,
  remove,
};
