const express = require("express");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const {join} = require('path');
const morgan = require("morgan");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs');
const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');
const reviewsRouter = require('./routes/reviews');

const adapter = new FileSync(join(__dirname,'..','db.json'));
const db = low(adapter);
db.defaults({ reviews:[], user: [], message: ''}).write();    
const app = express();
const PORT = process.env.PORT || 4000;

// app configs.
app.db = db;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan("dev"));
app.use(cors());
app.use('/', homeRouter);
app.use('/users',usersRouter);
app.use('/reviews', reviewsRouter)
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));

//initialize the app.
async function initialize(){    
    app.listen(PORT);
};

initialize()
    .finally(
        () => console.log(`app started on port:${PORT}`)
    );