//Criar Tabela
class SweetLocalDB {
  constructor(dbName) {
    this.dbName = dbName;
    localStorage.setItem("sweetTableExists", 1);
  }
  dbHasBeenInitialized() {
    let table = localStorage.getItem("sweetTableExists");
    return table !== null ? true : false;
  }
  //Tabela
  createTable(tableName, columns) {
    let newColumns = [...columns, "$id"];
    let table = {
      name: tableName,
      columns: newColumns,
      rows: [],
    };
    localStorage.setItem(this.dbName + "-" + table.name, JSON.stringify(table));
    localStorage.setItem("sweetTableExists", JSON.stringify(1));
    const tables = this.getAllTables();
    return tables.some((tb) => tb.name == tableName);
  }
  getAllTables() {
    const keys = Object.keys(localStorage);
    const values = [];
    keys.forEach((key) => {
      if (key.startsWith(this.dbName + "-")) {
        const item = JSON.parse(localStorage.getItem(key));
        values.push(item);
      }
    });
    // console.log(values);
    return values;
  }
  getTable(name) {
    return this.getAllTables().find((table) => table.name == name);
  }
  removeTable(name) {
    localStorage.removeItem(this.dbName + "-" + name);
    return this.getTable(name) === undefined ? true : false;
  }
  updateTable(name, data) {
    let table = this.getTable(name);
    table.columns.splice(table.columns.indexOf("$id"), 1);
    if (data.updateCols) {
      if (data.updateCols.remove) {
        data.updateCols.remove.forEach((colToRemove) => {
          if (table.columns.some((col) => col == colToRemove))
            table.columns.splice(table.columns.indexOf(colToRemove), 1);
        });
      }
      if (data.updateCols.add) {
        data.updateCols.add.forEach((colToAdd) => {
          if (!table.columns.some((col) => col == colToAdd))
            table.columns.push(colToAdd);
        });
      }
      if (data.updateCols.update) {
        for (let [key, value] of Object.entries(data.updateCols.update)) {
          const index = table.columns.indexOf(key);
          if (index !== -1) {
            table.columns[index] = value;
          }
        }
      }
    }
    if (data.name) {
      table["name"] = data.name;
      this.removeTable(name);
      this.createTable(data.name, table.columns);
      return this.getTable(data.name);
    } else {
      this.createTable(name, table.columns);
      return this.getTable(name);
    }
  }
  saveLocalStorage(name, data) {
    const newData = JSON.stringify(data);
    const newName = this.dbName + "-" + name;
    localStorage.setItem(newName, newData);
  }
  //Dados
  insert(table, data) {
    let result;
    if (data.length && data.length > 0) {
      data.forEach((item) => {
        result = this.addItem(table, item);
      });
    } else {
      result = this.addItem(table, data);
    }

    return result;
  }
  addItem(name, item) {
    const table = this.getTable(name);
    const id = table.rows[table.rows.length - 1].$id
      ? parseInt(table.rows[table.rows.length - 1].$id) + 1
      : 1;
    let newItem = {
      ...item,
      $id: id,
    };
    let result;
    Object.keys(item).forEach((key) => {
      if (!table.columns.some((col) => col == key))
        result = `This key [${key}] is not exists in columns this table`;
    });
    if (result !== undefined) return result;
    table.rows.push(newItem);
    localStorage.setItem(this.dbName + "-" + name, JSON.stringify(table));
    result = this.getTable(name);
    return {
      saved: true,
      $id: newItem.$id,
    };
  }
  delete(name, where, data) {
    const table = this.getTable(name);
    let previous = table["rows"].length;
    table["rows"] = table["rows"].filter((row) => row[where] !== data);
    let next = table["rows"].length;
    localStorage.setItem(this.dbName + "-" + name, JSON.stringify(table));
    return previous - next;
  }
  get(name) {
    const table = this.getTable(name);
    return table["rows"];
  }
  find(name, where, condition, data) {
    const table = this.getTable(name);
    switch (condition) {
      case "start":
        return table["rows"].filter((row) => row[where].startsWith(data));
      case "end":
        return table["rows"].filter((row) => row[where].endsWith(data));
      case "contain":
        return table["rows"].filter((row) => row[where].includes(data));
      case "=":
        return table["rows"].filter((row) => row[where] == data);
      case ">":
        return table["rows"].filter((row) => row[where] > data);
      case ">=":
        return table["rows"].filter((row) => row[where] >= data);
      case "<":
        return table["rows"].filter((row) => row[where] < data);
      case "<=":
        return table["rows"].filter((row) => row[where] <= data);
    }
    return true;
  }
  update(name, data, where, condition, info) {
    const table = this.getTable(name);
    let result;
    Object.keys(data).forEach((key) => {
      if (!table.columns.some((col) => col == key))
        result = `This key [${key}] is not exists in columns this table`;
    });
    if (result !== undefined) return result;
    switch (condition) {
      case "start": return table["rows"].map((row) => {
          if (row[where].startsWith(info)) {
            for(let [key,value] of Object.entries(data)){
              row[key] = value;
            }
          }
          return row;
        });
        case 'end' : return table["rows"].map((row) => {
          if (row[where].endsWith(info)) {
            for(let [key,value] of Object.entries(data)){
              row[key] = value;
            }
          }
          return row;
        });
        case 'contain' : return table["rows"].map((row) => {
          if (row[where].includes(info)) {
            for(let [key,value] of Object.entries(data)){
              row[key] = value;
            }
          }
          return row;
        });
        case '=' : table['rows'] = table["rows"].map((row) => {
          if (row[where] == info) {
            for(let [key,value] of Object.entries(data)){
              row[key] = value;
            }
          }
          return row;
        });
        case '>' : table['rows'] = table["rows"].map((row) => {
          if (row[where] > info) {
            for(let [key,value] of Object.entries(data)){
              row[key] = value;
            }
          }
          return row;
        });
        case '>=' : table['rows'] = table["rows"].map((row) => {
          if (row[where] >= info) {
            for(let [key,value] of Object.entries(data)){
              row[key] = value;
            }
          }
          return row;
        });
        case '<' : table['rows'] = table["rows"].map((row) => {
          if (row[where] < info) {
            for(let [key,value] of Object.entries(data)){
              row[key] = value;
            }
          }
          return row;
        });
        case '<=' : table['rows'] = table["rows"].map((row) => {
          if (row[where] <= info) {
            for(let [key,value] of Object.entries(data)){
              row[key] = value;
            }
          }
          return row;
        });
    }

    this.saveLocalStorage(name,table);
    return true;
  }
}
