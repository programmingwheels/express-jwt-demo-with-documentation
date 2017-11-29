import Users from '../models/users.model';
import jwt from 'jsonwebtoken'; // this is used for generating jwt token
function registerUser(req,res,next){



  // checking any user with same emailid already registed.
  Users.count({email:req.body.email})
      .then((u)=>{
         console.log(u);
         if(u)
           return res.status(409).json({errmsg:'User with the same email ID already exists'})
          else{
            // otherwise saving it to the database
            const user = new Users({
              firstname:req.body.firstname,
              lastname:req.body.lastname,
              email:req.body.email
            });
            // hashing the password with bcrypt algorithms
            user.password = user.HashPassword(req.body.password)
            return user.save()
                        .then(()=>{
                          return res.json({message:"A verification mail has been sent to your registered mail."})
                        })

                        // code to send email has to come here. which require additional time
          }
      })
      .catch(err=>{

        next(err);
      })

}

function loginUser(req,res,next){
   Users.findOne({email:req.body.email})
       .then(user=>{

          if(!user)
             return res.status(400).json({errmsg:'user with entered email doesnt exist'})
          else if(!user.validatePassword(req.body.password))
            return res.status(400).json({errmsg:'wrong Password'});
          else {

             let {firstname,lastname,email,_id}= user;
             const payload={firstname,lastname,email,_id}

             let jwttoken = jwt.sign(payload,process.env.JWT_SECRET,{ expiresIn: 60 * 60 });
             return res.json({token:jwttoken,user:payload});
          }

       }).catch(err=>{
          next(err);
       })
}

export default {registerUser,loginUser};
