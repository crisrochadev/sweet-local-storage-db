# Local Storage DB

<table>
  <tbody>
    <tr>
      <td><img src="./assets/images/logo.png" alt="Local Storage DB" title="Local Storage DB"/></td>
      <td><b>A database system in Javascript, which uses localStorage to store data, in order to facilitate their persistence in processes and creation.</b></td>
    </tr>
  </tbody>
</table>
<br/>
<hr/>
<br/>

## Inicialize

```javascript
const db = new SweetLocalDB(<dbName>);
```

### Check if the database has been initialized

```javascript
const isInit = db.dbHasBeenInitialized();
```

### Create Table

```javascript

bd.createTable(<tableName>,<arrayColumnsName>);

```

### Get all Tables

```javascript
const tables = db.getAllTables();
```

### get table by name

```javascript

const table = db.getTable(<table-name>);

```

### update the table

```javascript
  const table = db.updateTable(<table-name>,{
    name:<new-table-name><optional>,
    updateCols:{
        remove:[<remove-items-list>]<optional>,
        add:[<add-items-list>']<optional>,
        update:{
            <new-column>:<old-column>
        }<optional>
    }
  });
```

```javascript
const table = db.updateTable("users", {
  name: "clients",
  updateCols: {
    remove: ["last_name", "first_name"],
    add: ["full_name"],
    update: {
      password: "pass",
    },
  },
});
```

### delete the table

```javascript

const table = db.removeTable(<table-name>);

```

## CRUD

### Insert

```javascript
const data = db.insert("<table-name>", {
  name: "John Doe",
  email: "jhon@doe.com",
  password: "123456",
});
```

or

```javascript
const data = db.insert("<table-name>", [
  {
    name: "John Doe",
    email: "jhon@doe.com",
    password: "123456",
  },
  {
    name: "Doe John",
    email: "email@email.com",
    password: "654321",
  },
]);
```

### Update

```javascript

const data = db.update('<table-name>',{<data>},'<find>','<condition>','<where>');

const data = db.update('users',{password:'654321'},'$id','=',3);

```

<a href="#conditions"> Conditions </a>

### Read (Get)

#### Get all items

```javascript
const data = db.get("users");
```

#### Find by

```javascript
const data1 = db.find("<table-name>", "<find>", "<condition>", "<where>");

const data1 = db.find("users", "full-name", "start", "John");
```

About the Conditions see the list <a href="#conditions"> Conditions </a>

### Delete

```javascript
const data1 = db.find("<table-name>", "<$id>", "<id>");

const data = db.delete("clients", "$id", 2);
```

## Contitions

<div id='conditions'>
<table>
  <thead>
    <tr>
      <th>Condition</th>
      <th>type</th>
      <th>Description</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td>start</td>
      <td style="color:blue">String</td>
      <td>value starts with:</td>
    </tr>
     <tr>
      <td>end</td>
      <td style="color:blue">String</td>
      <td>value ends with:</td>
    </tr>
     <tr>
      <td>contain</td>
      <td style="color:blue">String</td>
      <td>value conatain {caractere}</td>
    </tr>
    <tr>
      <td>></td>
      <td style="color:blue">String</td>
      <td>value greater than</td>
    </tr>
    <tr>
      <td>>=</td>
      <td style="color:blue">String</td>
      <td>value greater than or equal to</td>
    </tr>
    <tr>
      <td><</td>
      <td style="color:blue">String</td>
      <td>value less than </td>
    </tr>
    <tr>
      <td><=</td>
      <td style="color:blue">String</td>
      <td>value less than or equal to</td>
    </tr>
    <tr>
      <td>=</td>
      <td style="color:blue">String</td>
      <td>value equal to</td>
    </tr>
  </tbody>
</table>

</div>
