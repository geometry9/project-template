var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var plantSchema = new Schema({
  name:  String,
  scientificName: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});
