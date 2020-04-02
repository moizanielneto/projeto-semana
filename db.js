const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./semana.db")

db.serialize( function() {
    //criando a tabela
    db.run(`CREATE TABLE IF NOT EXISTS ideas(

        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT

    );
    `)
    // adicionando itens
    //const query = `
    //INSERT INTO ideas(
    //    image,
    //    title,
    //    category,
    //    description,
    //    link
    //) VALUES(?,?,?,?,?)`
    //const values = [
    //    "https://image.flaticon.com/icons/svg/2729/2729001.svg",
    //    "Curso de Programação",
    //    "Estudo",
    //    "huehuehuehuehuwhuwheuwqhewquheuqwie",
    //    "https://rocketseat.com.br"
    //]    
    //db.run(query , values , function(err){
    //    if (err) return console.log(err)
    
    //   console.log(this)
    //}) 
    //deletando dados da tabela
    //db.run(`DELETE FROM ideas WHERE id = ?`,[1],function(err){
    //    if (err) return console.log(err)
    //
    //    console.log("deletei",this)
    //})

    // consultando dados da tabela
    //db.all(`SELECT * FROM ideas` , function(err , rows){
    //    if (err) return console.log(err)
    //
    //   console.log(rows)
    //})
})

module.exports = db