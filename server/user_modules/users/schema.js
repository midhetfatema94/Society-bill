var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose'),
    bcrypt = require('bcrypt-nodejs');

var Users = new Schema({
    username: String,
    password: String
});

Users.plugin(passportLocalMongoose);

module.exports = mongoose.model('Users', Users);