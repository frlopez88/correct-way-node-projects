const express = require('express')
const app = express()
const url = require('url')

app.get('/',  (req, res)=>{

    res.send(`<h1>Hello </h1>`)

} )

app.get('/multiply', (req, res)=>{

    let urlData = url.parse(req.url, true)
    let parameters = urlData.query
    let mul = parseFloat(parameters.a) * parseFloat(parameters.b)

    res.send(`<p>The multiplication is ${mul} </p>`)

} )

app.get('/divide', (req, res)=>{

    let urlData = url.parse(req.url, true)
    let parameters = urlData.query
    let div = parseFloat(parameters.a) / parseFloat(parameters.b)

    res.send(`<p>The division is ${div} </p>`)


} )

app.listen( 3000, ()=>{
    console.log("Server Running")

} )