import products from "../model/Product.js";

class productController{
    static getAll = (req , res) =>{
        products.find((err, products) =>{
                res.status(200).json(products)
        }
    )}

   
}
export default productController