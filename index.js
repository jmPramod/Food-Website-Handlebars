const express = require('express');
const { connectDataBase } = require('./config/dbConnect');
const shoppingRoutes = require('./routes/shoppingRoute');
const app = express();
require('dotenv').config();
const { engine } = require('express-handlebars');
const port = process.env.PORT;

/* Routes

1. home page "/" 
2. create a Product "/product/create" only for admin, not users (fire base DB to store img and video)
3. get all product "/product/get-all"
4. get a single product "/product/get/:id"
5. filter the product based on price , name , category
6. create 2 roles admin(CRUD) and users(R)
7. hash password, forgot password(node mailer), link to reset password , Google login
8. cart , with price quantity , use populate to link an account to address
9. use swagger document 
10. do pagination from backend 


*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use('/', shoppingRoutes);
app.use(express.static(__dirname + '/public'));
connectDataBase(); //connect Data Base
app.listen(port, () => {
  console.log(`the server running on port ${port} `);
});
