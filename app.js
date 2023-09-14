const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const authRouter = require('./authRouter')

//DATABASE
const db = require('./database')
//Test DB
 db.authenticate()
	.then(() => console.log('Database connected'))
	.catch(err => console.log('Error: ' + err))


const app = express()

app.use(express.json())
app.use("/auth", authRouter)


app.get('/', (req, res) => res.send('Hello World'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));