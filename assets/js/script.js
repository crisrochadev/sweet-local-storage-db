const db = new SweetLocalDB('sweet');
console.log(db.dbHasBeenInitialized());

//Criar Tabela

// const table = db.createTable('users',['name','email','password']);
// console.log(table);

//Buscar Todas as Tabelas

// const table = db.getAllTables();
// console.log(table);

//Buscar tabela por nome

// const table = db.getTable('users');
// console.log(table);

//Alterar tabela

// const table = db.updateTable('users-teste',{
//   name:'users',
//   updateCols:{
//     remove:['phone'],
//     add:['email'],
//     update:{
//       pass:'password'
//     }
//   }
// })

//Deletar Tabela

// const table = db.removeTable('users');



// console.log(table)
/**
 * Itens
 */

// Inserir Item
// const data = db.insert('users',{
//   name:"Vinicius da Rocha",
//   email:"cristiane@gmail.com",
//   password:"123456"
// });

//Remover Item
// const data = db.delete('users','$id',2);

//Trazer todas os dados
// const data = db.get('users');

//Trazer dado expecifico

// const data1 = db.find('users','name','start','Vinicius');
// console.log(data1);

// const data8 = db.find('users','name','end','cha');
// console.log(data8);

// const data2 = db.find('users','name','=','Vinicius da Rocha');
// console.log(data2);

// const data3 = db.find('users','name','contain','Vinicius');
// console.log(data3);

// const data4 = db.find('users','$id','>',3);
// console.log(data4);

// const data5 = db.find('users','$id','<',3);
// console.log(data5);

// const data6 = db.find('users','$id','>=',3);
// console.log(data6);

// const data7 = db.find('users','$id','<=',3);
// console.log(data7);

//Atualizar item

// const data = db.update('users',{
//   name:"Vinicius",
// },'$id','=','3');

// console.log(data)