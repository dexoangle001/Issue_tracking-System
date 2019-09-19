const express= require('express');
const app=express();
const mongoose= require('mongoose');
const bodyParser= require('body-parser');

require('dotenv/config');

app.use(bodyParser.json());

const post_route1=require('./routes/Clients');
const post_route2=require('./routes/Issue');
const post_route3=require('./routes/Item');

app.use('/Clients',require('./routes/Clients'));
app.use('/Issue',post_route2);
app.use('/Item',post_route3);



app.get('/',(req,res)=>
{
    res.send("HomePage under development");
});

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology:true},
    ()=>
    {
        console.log("Database Connected!!!!");
    }
);


app.listen(5000);