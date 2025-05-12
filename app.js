// const catMe = require('cat-me');

// console.log(catMe());

// 2. Creating a simple HTTP server

// const http = require('http');
// const server = http.createServer((req, res) => {
    // 1.
    //  console.log(req.url);
    // res.end('Hello World');

    // 2.
//     if(req.url ==='/'){
//         res.end('Home Page');
//     }
//     if(req.url ==='/about'){
//         res.end('About Page');
//     }
// });
// server.listen(3000, () => {
//     console.log('Server is running on port 3000');
// }
// );

// 3. routing Express

// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     res.send('Home Page');
// })
// app.get('/about',(req,res)=>{
//     res.send('About Page');
// })
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// 4. rendering HTML using express

// const express = require('express');
// const app = express();

// app.set('view engine', 'ejs');

// app.get('/',(req,res)=>{
//     res.render('index');
// })
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


// 5. Middleware in Express

// A.Custom Middleware
// const express = require('express');
// const app = express();

// app.set('view engine', 'ejs');

// app.use((req,res,next)=>{
//     console.log('Middleware 1');
//     const a = 10;
//     const b = 20;
//     const c = a + b;
//     console.log('Sum:', c);
//     next();
    
// })

// app.get('/',(req,res)=>{
//     res.render('index');
// })
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// B. Third Party Middleware
// const express = require('express');
// const app = express();
// const morgan = require('morgan');

// app.use(morgan('dev'));

// app.set('view engine', 'ejs');


// app.get('/',
// (req,res,next)=>{
//     const a=5;
//     const b = 15;
//     console.log(a+b);
//     next()

// },(req,res)=>{
//     res.render('index');
// })
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// 9.form controls

// const express = require('express');
// const app = express();
// const dbConnection = require('./config/db');
// const userModel = require('./models/user');
// const morgan = require('morgan');

// app.use(morgan('dev'));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// app.set('view engine', 'ejs');


// app.get('/',(req,res)=>{
//     res.render('index');
// })
// // app.get('/get-form-data',(req,res)=>{
// //     console.log(req.query);
// //     res.send('Form data received');
    
// // })
// app.post('/get-form-data',(req,res)=>{
//     console.log(req.body);
//     res.send('Form data received');
    
// })
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// 10.
// const express = require('express');
// const app = express();
// const dbConnection = require('./config/db');
// const userModel = require('./models/user');
// const morgan = require('morgan');

// app.use(morgan('dev'));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// app.set('view engine', 'ejs');



// app.get('/register',(req,res)=>{
//     res.render('register');
// })
// app.post('/register',async(req,res)=>{
//     // console.log(req.body);
//     const { username, email, password } = req.body;
//     // await userModel.create({
//     //     username: username,
//     //     email: email,
//     //     password: password
//     // })
//     // res.send('user registered');
    
//     const newuser =await userModel.create({
//         username: username,
//         email: email,
//         password: password
//     })
//     res.send(newuser);
    
// })

// // })

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


// 11. CRUD operations

const express = require('express');
const app = express();
const dbConnection = require('./config/db');
const userModel = require('./models/user');
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');



app.get('/register',(req,res)=>{
    res.render('register');
})
app.post('/register',async(req,res)=>{
    // console.log(req.body);
    const { username, email, password } = req.body;
    // await userModel.create({
    //     username: username,
    //     email: email,
    //     password: password
    // })
    // res.send('user registered');
    
    const newuser =await userModel.create({
        username: username,
        email: email,
        password: password
    })
    res.send(newuser);
    
})

app.get('/get-users',(req,res)=>{
    // userModel.find({
    //     username: 'John'
    // }).then((users)=>{
    //     console.log(users);
    //     res.send(users);
    // })
    userModel.findOne({
        username: 'John'
    }).then((users)=>{
        console.log(users);
        res.send(users);
    })
    
    
}
)
// UPDATE
app.get('/update-user',async(req,res)=>{
    await userModel.findOneAndUpdate({
        username: 'John'
    },{
        username: 'John Doe'
    })
    res.send('User updated');
})

// DELETE
app.get('/delete-user',async(req,res)=>{
    await userModel.findOneAndDelete({
        username: 'John Doe'
    })
    res.send('User deleted');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
