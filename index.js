const express = require('express');
const { connectDataBase } = require('./config/dbConnect');
const shoppingRoutes = require('./routes/shoppingRoute');
const app = express();
require('dotenv').config();
const { engine } = require('express-handlebars');
const port = process.env.PORT;

const session = require('express-session');
const flash = require('connect-flash');
const admin = require('firebase-admin');
const credential = require('./shoppingKeyFirebase.json');
const { authRoute } = require('./routes/authRoutes');
admin.initializeApp;
({
  credential: admin.credential.cert(credential),
});
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
app.use(express.json());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'testyantra',
    resave: true,
    saveUninitialized: true,
  })
);

app.use(flash());
app.use(function (req, res, next) {
  res.locals.SUCCESS_MESSAGE = req.flash('SUCCESS_MESSAGE');
  res.locals.ERROR_MESSAGE = req.flash('ERROR_MESSAGE');
  res.locals.INFO_MESSAGE = req.flash('INFO_MESSAGE');
  next();
});
app.use('/', authRoute);
app.use('/', shoppingRoutes);
app.post('/post', async (req, res) => {
  const userResponse = await admin.auth().createUser({});
});
connectDataBase(); //connect Data Base
app.listen(port, () => {
  console.log(`the server running on port ${port} `);
});
