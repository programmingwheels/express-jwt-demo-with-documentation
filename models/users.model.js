import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs'
const userSchema = new mongoose.Schema({
  firstname:{type:String,required:true},
  lastname :{type:String,required:true},
  email :{type:String,required:true},
  password:{type:String,required:true},
  emailVarifyStatus:{type:Boolean,default:false}
})

userSchema.methods.HashPassword = (password)=>{
   return bcrypt.hashSync(password,bcrypt.genSaltSync(10),null);
}

userSchema.methods.validatePassword = function(password){
  return bcrypt.compareSync(password,this.password);
}
/*userSchema.methods.validatePassword = (password)=>{
  return bcrypt.comparSync(password,this.password);
}*/

export default mongoose.model('User',userSchema);
