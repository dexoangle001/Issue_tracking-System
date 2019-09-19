const mongoose = require('mongoose');

const ClientSchema= mongoose.Schema({

    client_name:
        {
            type:String,
            required:true
        },
    client_receiptNo:
        {
            type:Number,
            required:true
        },
    client_contact:
        {
            type:String
        },
    client_email:
        {
            type:String,
            required:false
        },
    client_purchaseDt:
        {
            type:String,
            required:true
        },
    date_issued:
        {
            type:Date,
            default:Date.no
        }

});

module.exports= mongoose.model('Client',ClientSchema);