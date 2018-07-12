const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: { type: String, required:true },
    content: { type: String, required:true },
    tag: { type: String },
    views: Number,
    releaseDate: { type: Date }
})
const Article = mongoose.model('article',articleSchema);
module.exports = Article;