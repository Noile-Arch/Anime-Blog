const { Schema, models, model } = require ("mongoose");

const blogSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    body:{
        type: String,
        required:true
    },
    author:{
        type: String,
        required:true
    }
})

const Blogs =models.Blogs || model('Blogs',blogSchema);

module.exports = Blogs;