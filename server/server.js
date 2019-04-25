const express = require('express');
const bodyParser  = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());


//========================
//         MODELS
//=========================
const { User } = require('./models/user');




//========================
//         USERS
//=========================

app.post('/api/users/register', (req, res) => {

    const user = new User(req.body);

    user.save((err, doc ) => {
        if(err) return res.json({success: false, err})
        res.status(200).json({
            success: true, 
            userdata: doc.name

        })
    });





    
})


const port = process.env.PORT || 3002;

app.listen( port, () => {
    console.log(`Server runing at ${port}`);
})