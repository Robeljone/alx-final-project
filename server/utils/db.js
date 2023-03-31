const {createPool} = require('mysql2/promise');

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todolist_app',
  namedPlaceholders: true,
});

module.exports = {
  pool,
};
