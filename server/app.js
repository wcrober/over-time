const express = require('express')
const app = express()
const pgp = require('pg-promise')()
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 8080


app.use(cors())
app.use(bodyParser.json())

connect = {
    "host": "otto.db.elephantsql.com",
    "port": 5432,
    "database": "cykdgjkm",
    "user": "cykdgjkm",
    "password": "8OqQn7H5ufHlBTywLHR_NB_UMt0__tBQ"
}

db = pgp(connect)




app.get('/api/members', async (req,res) => {
    let members =  await db.any('select * from ot_members')
      res.json(members)
})




app.post('/api/members', (req,res) => {

    let user_name = req.body.user_name
    let city = req.body.city
    let state = req.body.state
    let street_name = req.body.street_name
    
     db.any('INSERT into ot_members(user_name, city, state, street_name) VALUES($1,$2,$3,$4)', [user_name, city, state, street_name])
    .then((newuser)=> {
        res.json({success:true, message:"Your item has been save"})
    }).catch(error => res.json({success:false, message:"Your item was not saved"}))
})





app.listen(PORT,() => {
    console.log("Express server is running on port 8080")
})