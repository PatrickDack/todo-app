const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (task) => {
  const newTask = await connection()
    .then((db) => db.collection('tasks').insertOne(task));

  const { insertedId } = newTask;

  return connection()
    .then((db) => db.collection('tasks').findOne({ _id: ObjectId(insertedId)}));
};

const getAll = async () => {
  return connection()
    .then((db) => db.collection('tasks').find().toArray());
};

const remove = async (id) => {
  await connection()
    .then((db) => db.collection('tasks').deleteOne({ _id: ObjectId(id) }));
}

module.exports = {
  create,
  getAll,
  remove,
};
