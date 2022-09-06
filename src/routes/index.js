import express from "express";
import user from "./userRoute.js"

const routes = (app)=>{ 
app.route('/').get((req,res)=>{
    res.status(200).send({titulo:"Myshop"})
})
app.use(
        express.json(),
        user,
        
    )

}

export default routes