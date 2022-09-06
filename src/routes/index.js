import express from "express";
import expensesController from "../controller/expenseController";
import productController from "../controller/productController";
import userController from "../controller/userController";

const routes = (app)=>{ 
app.route('/').get((req,res)=>{
    res.status(200).send({titulo:"Myshop"})
})
app.use(
        express.json(),
        expensesController,
        productController,
        userController
        
    )

}

export default routes