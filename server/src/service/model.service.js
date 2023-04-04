

async function createTable(getDB, tableName, Schema) {
   
const placeholders = Schema.map(column => {
  let placeholder = `${column.name} ${column.type}`;
  if (column.isPrimary) {
    placeholder += ' NOT NULL PRIMARY KEY';
  }
  if (column.isAutoIncrement) {
    placeholder += ' AUTO_INCREMENT';
  }
  if (column.foreignKey) {
      const { table, column: foreignColumn } = column.foreignKey;
      placeholder += `, FOREIGN KEY (${column.name}) REFERENCES ${table} (${foreignColumn})`;
    }
  return placeholder;
});


    const createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (${placeholders.join(', ')})`;
    return new Promise((resolve, reject) => {
        getDB().query(createTableQuery, (error, results, fields) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(results);
        });
      });
}




module.exports = { createTable};