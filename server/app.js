const express = require('express')
const app = express()
const pgp = require('pg-promise')()
const bodyParser = require('body-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const PORT = process.env.PORT || 8080

app.use(fileUpload());
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




let sale = [
    {seller_id: '27', for_sale_item: 'Bat', for_sale_amount: '20.00', description: "A bat for sale" },
    {seller_id: '30', for_sale_item: 'Glove', for_sale_amount: '50.00', description: "Old glove" }
]

app.post('/upload', (req, res, next) => {
    console.log(req);
    console.log(req.files)
    let imageFile = req.files.file;
  
    imageFile.mv(`${__dirname}/public/images/${req.body.filename}.jpg`, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
  
      res.json({file: `public/${req.body.filename}.jpg`});
    });
  
  })


app.get('/api/forsale', async (req,res) => {
    let saleitems = await db.any('select * from ot_forsale')
    res.json(saleitems)
})

app.delete('/api/delete-product/:id', async (req,res) =>{
    let product_id= req.params.id
    console.log('product_id', product_id)
    let purchased = await ('DELETE from ot_members where product_id = $1', [product_id])
    console.log(purchased)
    res.send({type: 'DELETE'})
    //let product_id = req.body.product_id
    //console.log('product_id', product_id)
})




app.get('/api/members', async (req,res) => {
    let members =  await db.any('select * from ot_members')
    console.log(members)  
    res.json(members)
})


app.post('/api/forsale', (req,res) => {
        let forsale_email = req.body.forsale_email
        let seller_id = req.body.seller_id
        let for_sale_item = req.body.for_sale_item
        let for_sale_amount=  req.body.for_sale_amount
        let description= req.body.description

        db.any('INSERT INTO ot_forsale (forsale_email, seller_id, for_sale_item, for_sale_amount, description) VALUES($1,$2,$3,$4,$5)', [forsale_email, seller_id, for_sale_item, for_sale_amount, description])
        .then((newitem) => {
            res.json({success:true, message:"Your item has been marked for sale"})
        }).catch(error =>res.json({success:false, message:"There was an error. Please try again!"}))
})



app.post('/api/members', (req,res) => {

    let email = req.body.email
    let password = req.body.password
    let address = req.body.address
    let address_two = req.body.address_two
    let city = req.body.city
    let state = req.body.state
    let zip = req.body.zip
    
     db.any('INSERT into ot_members(email, password, address, address_two, city, state, zip) VALUES($1,$2,$3,$4,$5,$6,$7)', [email, password, address, address_two,  city, state, zip])
    .then((newuser)=> {
        res.json({success:true, message:"Your item has been save"})
    }).catch(error => res.json({success:false, message:"Your item was not saved"}))
})






app.listen(PORT,() => {
    console.log("Express server is running on port 8080")
})