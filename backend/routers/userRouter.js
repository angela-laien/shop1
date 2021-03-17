import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.post(
    '/seed', 
    expressAsyncHandler(async (req, res) => {
        console.log(req.body)
        // await User.remove({});
        users = data.users
        const createdUsers = await User.insertMany(req.users
        ).then(function(){
            console.log("Data inserted")
            res.status(201).json({ message:"added user" })
        }).catch(function(error) {
            console.log(error)
            res.status(500).json({ errormessage:"could not add user" })
        })
        res.send({ createdUsers });
    })
);

export default userRouter;