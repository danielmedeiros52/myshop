import products from "../model/Product";

class productController{
    static getAll = (req , res) =>{
        products.find((err, products) =>{
                res.status(200).json(products)
        }
    )}

   
}