const assert = require('assert');
const Todo = require('./todo');
const todo = new Todo();

let testsCompleted = 0;

const deleteTest = () => {
  todo.add('Delete me');
  assert.equal(todo.getCount(), 1, '1 item should exist');
  todo.deleteAll();
  assert.equal(todo.getCount(), 0, 'No items should exist');
  testsCompleted++;
}

const addTest = () => {
  todo.deleteAll();
  todo.add('Added');
  assert.notEqual(todo.getCount(), 0, '1 item should exist');
  testsCompleted++;
}

const doAsyncTest = (cb) => {
  todo.doAsync(value => {
    assert.ok(value, 'Callback should be passed true');
  })
  .then(() => {
    testsCompleted++;
    cb()
  });
};

const throwsTest = (cb) => {
  assert.throws(todo.add, /requires/);
  testsCompleted++;
}

deleteTest();
addTest();
throwsTest();

doAsyncTest(() => {
  console.log(`Completed ${testsCompleted} tests`);
});
