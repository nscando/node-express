const mongoose = require('../bin/mongodb');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
     name: {
          type: String,
          trim: true
     },
     user: {
          type: String,
          unique: true,

     },
     password: {
          type: String,
          required: true
     }

});

UserSchema.pre('save', function (next) {
     this.password = bcrypt.hashSync(this.password, saltRounds);
     next();
});
module.exports = mongoose.model('users', UserSchema);