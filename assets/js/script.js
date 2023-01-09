document.getElementById("down").addEventListener("click", download);
function download() {
  let data = 'class SweetLocalDB{constructor(e){this.dbName=e,localStorage.setItem("sweetTableExists",1)}dbHasBeenInitialized(){return null!==localStorage.getItem("sweetTableExists")}createTable(e,t){let s={name:e,columns:[...t,"$id"],rows:[]};localStorage.setItem(this.dbName+"-"+s.name,JSON.stringify(s)),localStorage.setItem("sweetTableExists",JSON.stringify(1));let r=this.getAllTables();return r.some(t=>t.name==e)}getAllTables(){let e=Object.keys(localStorage),t=[];return e.forEach(e=>{if(e.startsWith(this.dbName+"-")){let s=JSON.parse(localStorage.getItem(e));t.push(s)}}),t}getTable(e){return this.getAllTables().find(t=>t.name==e)}removeTable(e){return localStorage.removeItem(this.dbName+"-"+e),void 0===this.getTable(e)}updateTable(e,t){let s=this.getTable(e);if(s.columns.splice(s.columns.indexOf("$id"),1),t.updateCols&&(t.updateCols.remove&&t.updateCols.remove.forEach(e=>{s.columns.some(t=>t==e)&&s.columns.splice(s.columns.indexOf(e),1)}),t.updateCols.add&&t.updateCols.add.forEach(e=>{s.columns.some(t=>t==e)||s.columns.push(e)}),t.updateCols.update))for(let[r,a]of Object.entries(t.updateCols.update)){let i=s.columns.indexOf(r);-1!==i&&(s.columns[i]=a)}return t.name?(s.name=t.name,this.removeTable(e),this.createTable(t.name,s.columns),this.getTable(t.name)):(this.createTable(e,s.columns),this.getTable(e))}saveLocalStorage(e,t){let s=JSON.stringify(t),r=this.dbName+"-"+e;localStorage.setItem(r,s)}insert(e,t){let s;return t.length&&t.length>0?t.forEach(t=>{s=this.addItem(e,t)}):s=this.addItem(e,t),s}addItem(e,t){let s=this.getTable(e),r=s.rows[s.rows.length-1].$id?parseInt(s.rows[s.rows.length-1].$id)+1:1,a={...t,$id:r},i;return(Object.keys(t).forEach(e=>{s.columns.some(t=>t==e)||(i=`This key [${e}] is not exists in columns this table`)}),void 0!==i)?i:(s.rows.push(a),localStorage.setItem(this.dbName+"-"+e,JSON.stringify(s)),i=this.getTable(e),{saved:!0,$id:a.$id})}delete(e,t,s){let r=this.getTable(e),a=r.rows.length;r.rows=r.rows.filter(e=>e[t]!==s);let i=r.rows.length;return localStorage.setItem(this.dbName+"-"+e,JSON.stringify(r)),a-i}get(e){let t=this.getTable(e);return t.rows}find(e,t,s,r){let a=this.getTable(e);switch(s){case"start":return a.rows.filter(e=>e[t].startsWith(r));case"end":return a.rows.filter(e=>e[t].endsWith(r));case"contain":return a.rows.filter(e=>e[t].includes(r));case"=":return a.rows.filter(e=>e[t]==r);case">":return a.rows.filter(e=>e[t]>r);case">=":return a.rows.filter(e=>e[t]>=r);case"<":return a.rows.filter(e=>e[t]<r);case"<=":return a.rows.filter(e=>e[t]<=r)}return!0}update(e,t,s,r,a){let i=this.getTable(e),l;if(Object.keys(t).forEach(e=>{i.columns.some(t=>t==e)||(l=`This key [${e}] is not exists in columns this table`)}),void 0!==l)return l;switch(r){case"start":return i.rows.map(e=>{if(e[s].startsWith(a))for(let[r,i]of Object.entries(t))e[r]=i;return e});case"end":return i.rows.map(e=>{if(e[s].endsWith(a))for(let[r,i]of Object.entries(t))e[r]=i;return e});case"contain":return i.rows.map(e=>{if(e[s].includes(a))for(let[r,i]of Object.entries(t))e[r]=i;return e});case"=":i.rows=i.rows.map(e=>{if(e[s]==a)for(let[r,i]of Object.entries(t))e[r]=i;return e});case">":i.rows=i.rows.map(e=>{if(e[s]>a)for(let[r,i]of Object.entries(t))e[r]=i;return e});case">=":i.rows=i.rows.map(e=>{if(e[s]>=a)for(let[r,i]of Object.entries(t))e[r]=i;return e});case"<":i.rows=i.rows.map(e=>{if(e[s]<a)for(let[r,i]of Object.entries(t))e[r]=i;return e});case"<=":i.rows=i.rows.map(e=>{if(e[s]<=a)for(let[r,i]of Object.entries(t))e[r]=i;return e})}return this.saveLocalStorage(e,i),!0}}';
  let blob = new Blob([data], { type: "text/plain;charset=utf-8;" });
  const link = window.document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "SweetLocalStorageDb.min.js";
  link.click();
  window.URL.revokeObjectURL(link.href);
}


// const db = new SweetLocalDB('sweet');
// console.log(db.dbHasBeenInitialized());

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
