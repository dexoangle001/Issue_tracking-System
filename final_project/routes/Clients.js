const express= require('express');

const router = express.Router();

const Client_post=require('../models/Client');

router.get('/',(req,res)=>
{
    res.send("Client Front_Face under development");
});

router.post('/',(req,res)=>
{
    const post= new Client_post({

        client_name: req.body.client_name,
        client_receiptNo: req.body.client_receiptNo,
        client_contact: req.body.client_contact,
        client_email: req.body.client_email,
        client_purchaseDt: req.body.client_purchaseDt
    });

    post.save()
        .then(data=>
        {
            res.json(data);
        })
        .catch(error=>
        {
            res.json({message:error});
        });
});

module.exports= router;