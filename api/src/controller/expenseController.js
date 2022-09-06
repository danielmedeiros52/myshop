import expenses from "../model/Expenses.js";

class expensesController {
    
    static getAll = (req,res)=>{
        expenses.find((err, expenses)=> {
            res.status(200).json(expenses)
        })
    }
} 

export default expensesController