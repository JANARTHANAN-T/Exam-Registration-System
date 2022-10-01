const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  id: {
    type: String,
    unique: true,
  },
  email: String,
  department: String,
  year: String,
  section: String,
  password: String,
  joinedOn: {
    type: Date,
    default: Date.now,
  },
  dob: {
    type: Date,
  },
  mobile: {
    type: String,
  },
  registered:[{
    type:Schema.Types.ObjectId,
    ref:'Exam'
}]
  
});

module.exports = mongoose.model("User", userSchema);
