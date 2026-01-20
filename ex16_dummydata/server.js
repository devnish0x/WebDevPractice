const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const Emp = require("./Models/employee")

mongoose.connect("mongodb://localhost:27017/company")

const app = express()
const port = 3000
app.set('view engine','ejs')

let names =["nishan","Eren","luffy","kettist"]
let sal =[2000,6000,12000,60000]
let lang =["tulu","kannada","hindi","english"]
let cities =["udupi","Kundapura","bengaluru","mangalore"]
let mane = ["true","false","false","false"]


app.get('/', (req, res) => {
  res.render('index',{foo :"FOO"});
})

app.get('/generate',  async(req, res) => {
    console.log("yo")

    for (let index = 0; index < 10; index++) {
        n= Math.floor(Math.random()*4)
        na = names[n]

        n= Math.floor(Math.random()*4)
        sa = sal[n]

        n= Math.floor(Math.random()*4)
        la = lang[n]

        n= Math.floor(Math.random()*4)
        ci= cities[n]

        n= Math.floor(Math.random()*4)
        ism = mane[n]


         let e = await Emp.create({
            name :na,
            salary:sa,
            language: la,
            city:ci,
            ismanager:ism
        })
        console.log(e)

    }

    res.render('index',{foo :"FOO"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

