class Todo {
  constructor() {
    this.todos = [];
  }

  add(item) {
    if (!item) throw new Error('Todo#add requires an item');
    this.todos.push(item);
  }

  deleteAll() {
    this.todos = [];
  }

  getCount() {
    return this.todos.length;
  }

  doAsync(cb) {
    return new Promise(resolve => {
      setTimeout(param => {
        cb(param);
        resolve();
      }, 2000, true);
    });

  }
}

module.exports = Todo;
