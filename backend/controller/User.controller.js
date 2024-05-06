import { User } from "../model/Users.model.js";
import bcrypt from "bcrypt"

const register =async (req,res)=>{
    try {
        const {fullname,email, password} = req.body
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message: "User already exists"})
        }

        const hashPassword =await bcrypt.hashSync(password,10)
        const userCreated = new User({
            fullname,
            email,
            password:hashPassword
        })
        await userCreated.save()
        res.status(201).json({message: "User created successfully",User:{
            _id:userCreated._id,
            fullname:userCreated.fullname,
            email:userCreated.email,
        }})
    } catch (error) {
        console.log("connection to the database failed",error);
        res.status(500).json(error)
    }
}

const login = async (req,res)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message: "User does not exist"})
        }
        const isPasswordCorrect = await bcrypt.compare(password,user.password)

        if(!isPasswordCorrect){
            return res.status(400).json({message: "Incorrect password"})
        }
        res.status(200).json({message: "Login successful",User:{
            _id:user._id,
            fullname:user.fullname,
            email:user.email
        }})
    } catch (error) {
        console.log("connection to the database failed",error);
        res.status(500).json(error)
    }
}

export {register,login}