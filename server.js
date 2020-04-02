// usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()

const db = require("./db")

// configuraçao do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views",{
    express:server,
    noCache:true,
})

//const ideas = [
//    {
//        img:"https://image.flaticon.com/icons/svg/2729/2729001.svg",
//        title:"Curso de Programação",
//        category:"Estudo",
//        description:"huehuehuehuehuwhuwheuwqhewquheuqwie",
//        url:"https://rocketseat.com.br",
//    },
//    {
//       img:"https://image.flaticon.com/icons/svg/2729/2729005.svg",
//        title:"Exercicio",
//        category:"Saude",
//        description:"huehusheuwehuwhuwheuwqhewquheuqwie",
//        url:"https://rocketseat.com.br",
//    },
//    {
//        img:"https://image.flaticon.com/icons/svg/2729/2729027.svg",
//        title:"Meditação",
//        category:"Mentalidade",
//        description:"huehuehhdwehuwhuwheuwqhewquheuqie",
//        url:"https://rocketseat.com.br",
//    },
//    {
//        img:"https://image.flaticon.com/icons/svg/2729/2729021.svg",
//        title:"Jogar video game",
//        category:"Games",
//        description:"uqhwuqhuwhqiuehwuqihewewquheuqwie",
//        url:"https://rocketseat.com.br",
//    },
//]



server.use(express.static("public"))

server.use(express.urlencoded({extended : true}))

server.get("/" , function(req , res){

    db.all(`SELECT * FROM ideas` , function(err , rows){
        if (err) return console.log(err)
        const reversedideas = [...rows].reverse()
   
        let lastideas = []
        for (let idea of reversedideas){
            if (lastideas.length < 3){
                lastideas.push(idea)
            } 
        }
        return res.render("index.html", { ideas:lastideas })
           
    })



   
})

server.get("/pagina2" , function(req , res){
    db.all(`SELECT * FROM ideas` , function(err , rows){
        if (err) return console.log(err)
        const reversedideas = [...rows].reverse()

        return res.render("pagina2.html" , {ideas: reversedideas})
    })
})


server.use(express.static("public1"))

server.get("/formulario" , function(req , res){
    return res.render("formulario.html")
})

server.post("/formulario" , function(req , res){
    // adicionando itens
    const query = `
        INSERT INTO ideas(
            image,
            title,
            category,
            description,
            link
        ) VALUES(?,?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link
    ]    
    db.run(query , values , function(err){
        if (err) {
            console.log(err)
            return res.send("erro no BD")
        }
        return res.redirect("/" , "/pagina2")
    }) 
})
// npm run dev
server.listen(3000)