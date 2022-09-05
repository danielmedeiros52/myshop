import expenses from "../model/Expenses";

class expensesController {
    static getAll = (req,res)=>{
        autores.find((err, expenses)=> {
            res.status(200).json(expenses)
        })
    }
} 