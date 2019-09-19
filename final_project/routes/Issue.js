const express = require('express');
const router= express.Router();
const Issue_Post= require('../models/Issues');

router.get('/',(req,res)=>
{
    res.send("Issue_Page under Development");
});

router.post('/',(req,res)=>
{
    const post= new Issue_Post({

        client_name:req.body.client_name,
        client_email:req.body.client_email,
        client_contact:req.body.client_contact,
        client_device: req.body.client_device,
        issues: req.body.issues,

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

module.exports =router;

