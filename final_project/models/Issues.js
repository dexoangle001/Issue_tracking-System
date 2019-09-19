const mongoose= require('mongoose');
const IssueSchema=mongoose.Schema({

    client_name:
        {
            type:String,
            required:true
        },
    client_device:
        {
            type:String,
            required: true
        },
    issues:
        {
            type:String,
            required:true
        },
    client_email:
        {
            type:String,
            required:true
        },
    client_contact:
        {
            type:String,
            required:true
        },
    issue_date:
        {
            type:Date,
            defualt:Date.now()
        }

});

module.exports= mongoose.model('Issues',IssueSchema);