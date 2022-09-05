import users from "../model/User";

class userController {

    static getAll = (req, res) => {
        users.find((err, users)=> {
            res.status(200).json(users)
        })
    }
}