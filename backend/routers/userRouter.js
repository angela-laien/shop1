import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.get(
    '/seed', 
    expressAsyncHandler(async (req, res) => {
        // await User.remove({});
        users = data.users
        const createdUsers = await User.insertMany(req.users
        ).then(function(){
            console.log("Data inserted")
        }).catch(function(error) {
            console.log(error)
        })
        res.send({ createdUsers });
    })
);

export default userRouter;