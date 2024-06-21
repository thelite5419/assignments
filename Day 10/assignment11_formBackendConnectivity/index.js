const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//middlewear app
const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended : true}))


//
app.get('/', (req, res) => {
  res.send(`<h1>this is hello</h1>`)
})

const userRouter = require('./routes/users');
app.use('/user', userRouter )

app.listen(3000)