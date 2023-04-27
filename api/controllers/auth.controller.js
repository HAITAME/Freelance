
import User from '../models/user.model.js';
import bcrypt from "bcrypt";

export const register = async (req, res)=>{
    try{
        const hash = bcrypt.hashSync(req.body.password,10);
        const newUser = new User({
            ...req.body,
            password: hash,
        });

        await newUser.save();
        res.status(201).send("user has been creates");
    } catch (err){
        res.status(500).send("something went wrong");
    }

}
export const login = async (req, res)=>{
        try{
            const user =await User.findOne({username : req.body.username});
            if( !user)  return res.status(404).send("user not found !"); 
            const match = bcrypt.compareSync(req.body.password, user.password);
            if(!match) return res.status(400).send("wrong password or username!");
            const {password, ...info}=user._doc
            res.status(200).send(info)
        }catch{ }
    
}
export const logout = async (req, resp)=>{
        
}