var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/Me');
mongoose.Promise = global.Promise;

var UsersSchema = mongoose.Schema({
  id : {type : String, unique: true, required : true},
  passwd : {type : String, required : true},
  phone : {type : String, required : true},
  name : {type : String, required : true},
  token : {type : String}
});

var BoardSchema = mongoose.Schema({
  writer: String,
  title: String,
  contents: String,
  comments: [{
      name: String,
      memo: String,
  }],
  date: {type: Date, default: Date.now},
  token: String
});
var AdminSchema = mongoose.Schema({
  id: String,
  passwd: String
})
var PlaceSchema = mongoose.Schema({
  placeName: String,
  lat: String,
  lng: String,
  hostel : String
})

Admin = mongoose.model("admin", AdminSchema);
Users = mongoose.model("users", UsersSchema);
Boards = mongoose.model("boards", BoardSchema);
Place = mongoose.model("place", PlaceSchema);

exports.Admin = Admin;
exports.Boards = Boards;
exports.Users = Users;
exports.Place = Place;
