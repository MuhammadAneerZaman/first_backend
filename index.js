require("dotenv").config();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/twitter', (req,res)=>{
    res.send("Aneer Zaman");
})

app.get('/login', (req,res)=>{
    res.send("<h1> Login at Chai aur code </h1>")
})

app.get('/Youtube',(req,res)=>{
    res.send("<h2>Chai aur code</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Your app listening on port ${port}`)
})
