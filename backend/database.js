const mongoose = require("mongoose");

mongoose.connect(mongodb+srv://dolovely678:<password>@cluster0.d1nkkfx.mongodb.net/);
const Todoschema=mongoose.Schema({
  title:String,
  description:String,
  completed:{
    type:Boolean,
    default:false
  }
})

const todo=mongoose.model('todos',Todoschema);
module.exports(todo)
