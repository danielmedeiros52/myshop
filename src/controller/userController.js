import users from "../model/User.js";

class userController {

    static getAll = (req, res) => {
        users.find((err, users)=> {
            res.status(200).json(users)
        })
    }
    static getByID = (req,res)=>{
        const id = req.params.id;
   
        users.findById(id,(err,users) =>{
   
            if(err){
                res.status(400).send({message:`${err.message}  - User not found`})
            }else{
               res.status(200).send(users)
           }
       })
   
   
     }
    static create=(req,res)=>{
       newUser = new users(req.body) 
        users.save((err)=>{
            if(err){
                res.status(400).send({message: `${err.message} - User error!`})
            }else{
                res.status(200).send(autor.toJSON())
            }
        })
    }
    static update=(req,res)=>{
        const id = req.params.id;
        users.findByIdAndUpdate(id,{$set: req.body}, (err=>{
            if(!err){
                res.status(200).send({message:"update success"})
            }else{
                res.status(500).send({message:err.message})
    
            }
        }))
    
    
      }
      static delete=(req,res)=>{
        const id = req.params.id;
        users.findByIdAndRemove(id, err =>{
            if(!err){
                res.status(200).send({message:"User deleted"})
            }else{
                res.status(500).send({message:err.message})
    
            }
        } )
    
    
      }
    
}
export default userController