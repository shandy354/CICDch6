const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
const path = require("path");
const session =require("express-session");
const { uuid } = require('uuidv4');
const router = require("./routes/index");
app.use(router);
const routes = require('./routes/auth');
//const authRoutes = require("./routes/auth");
//const swaggerJSON = require('./swagger.json');
const swaggerUI =require('swagger-ui-express');


app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/docs',swaggerUI.serve, swaggerUI.setup(require('./swagger.json')))
const port = process.env.PORT || 3002;

// set the view engine to ejs
app.set('view engine', 'ejs');
//app.use(express.static('public'));
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

app.use(session({
    secret:uuid(),
    resalve: false,
    saveUninitialized:true
}));
// app.get("/",(req, res)=>{
//     res.json({message:" wolcome"});
// });

// routes index
app.get('/',(req, res) => {
    res.render('login');
});
app.use('/route',routes);
//app.use(authRoutes);

// app.get('/',(req, res) => res.render('index'));
app.listen(port,()=> console.log(`server running on port ${port}`))