// Dependencies 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const userSchema = Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

// Stats Schema
const statsSchema = Schema({
    name: { type: String, required: true},
    height: { type: Number, required: true},
    weight: { type: Number, required: true},
    age: { type: Number, required: true},
    gender: { type: String, required: true},
})

// User & Stats Model
const User = mongoose.model('User', userSchema);
const Stats = mongoose.model('Stats', statsSchema);

// Export Models
module.exports = User;
module.exports = Stats;