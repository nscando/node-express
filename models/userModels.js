const mongoose = require('../bin/mongodb');
const bcrypt = require('bcrypt');
const saltRounds = 10;
//Define a schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
     name: {
          type: String,
          trim: true,
          required: true,
     },
     user: {
          type: String,
          trim: true,
          required: true,
          unique: true
     },
     password: {
          type: String,
          trim: true,
          required: true
     }
});
// hash user password before saving into database
UserSchema.pre('save', function (next) {
     this.password = bcrypt.hashSync(this.password, saltRounds);
     next();
});
module.exports = mongoose.model('users', UserSchema);