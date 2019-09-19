const express = require('express');
const router= express.Router();
const Item_Post= require('../models/Items');

router.get('/', (req,res)=>
{
    res.send("Items_page Under Development");
});

router.post('/', (req,res)=>
{
    const post = new Item_Post({

        item_name: req.body.item_name,
        item_color: req.body.item_color,
        item_type: req.body.item_type,
        item_price: req.body.item_price
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