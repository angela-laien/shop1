import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

// const app = express();
// app.use(express.json());

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     console.log(`Serve at http://localhost:${port}`);
// });

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/shopangla', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() => {
    const app = express()

    app.listen(5000, () => {
        console.log("Server has started!")
    })
    console.log('DB Connection Successful')

    app.get('/', (req, res) => {
        res.send('Server is ready');
    });
    app.use('api/users', userRouter);
    app.use('api/products', productRouter);
    app.use((err, req, res, next) => {
        res.status(500).send({message: err.message});
    });
})
.catch((err) => {
    console.log(err);
})

// app.use('api/users', userRouter);
// app.use('api/products', productRouter);

// app.get('/api/users/seed', (req, res) => {
//     res.status(200).json({ message: 'this is the route to create new users'})
// })

// app.post('/api/users/seed', async (req, res) => {
//     const { name, email, password, isAdmin } = req.body
//     let newUser = {
//         name,
//         email,
//         password,
//         isAdmin
//     }
//     console.log('new user: ', newUser)
//     try {
//         let result = await User.insert(newUser)
//     } catch {
//         console.log('could not insert user...')
//         res.status(500).json({ errorMessage: 'could not insert user...'})
//     }
//     console.log('successfuly added user!')
//     res.status(201).json({ message: 'successfuly added user!'})
// })

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });
// app.use((err, req, res, next) => {
//     res.status(500).send({message: err.message});
// });