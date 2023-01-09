# Local Storage DB

<center>
<img src="./assets/images/print.png" alt="Local Storage DB" title="Local Storage DB"/>
<p><i>A database system in Javascript, which uses localStorage to store data, in order to facilitate their persistence in processes and creation.<i></p>
</center>


## Inicialize

```javascript
const db = new SweetLocalDB(<dbName>);
```

### Verificar se o banco foi inicializado

```javascript
const isInit = db.dbHasBeenInitialized();
```

### Criar Tabela

```javascript

bd.createTable(<tableName>,<arrayColumnsName>);

```

### Busque todas as Tabelas

```javascript
const tables = db.getAllTables();
```

### Busque tabela pelo nome

```javascript

const table = db.getTable(<table-name>);

```

### Altere a tabela

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

### Exclua a tabela

```javascript

const table = db.removeTable(<table-name>);

```
## CRUD

### Insert

```javascript

const data = db.insert('<table-name>',{
  name:"John Doe",
  email:"jhon@doe.com",
  password:"123456"
});

```

### Update

```javascript

const data = db.update('<table-name>',{<data>},'<find>','<condition>','<where>');

const data = db.update('users',{password:'654321'},'$id','=',3);

```
Sobre as Condições consulte a lista <a href="#conditions"> Conditions </a>

### Read (Get)

#### Trazer todos os items

```javascript

const data = db.get('users');

```
#### filtrar Busca

```javascript

const data1 = db.find('<table-name>','<find>','<condition>','<where>');


const data1 = db.find('users','full-name','start','John');

```
Sobre as Condições consulte a lista <a href="#conditions"> Conditions </a>

### Delete

```javascript

const data1 = db.find('<table-name>','<$id>','<id>');


const data = db.delete('clients','$id',2);


```
