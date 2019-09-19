const mongoose= require('mongoose');

const ItemsSchema= mongoose.Schema({

    item_name:
        {
            type:String,
            required:true
        },

    item_color:
        {
            type:String,

        },
    item_type:
        {
            type:String,
            required:true
        },
    item_price:
        {
            type:String,
            required:true
        }

});

module.exports = mongoose.model('Items',ItemsSchema);