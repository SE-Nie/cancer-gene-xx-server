const express = require('express')
const app = express()
const cookieParser = require("cookie-parser");
var session = require('express-session')
const cors = require("cors");
port = process.env.PORT || 4000

app.use(cors({credentials: true, origin: 'https://focused-sinoussi-d2664b.netlify.app'}));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: 'keyboard cat',
    //cookie: {sameSite: "none"},
    
  })
); 
app.get('/', (req, res) => {
  console.log(req.sessionID)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Test app listening at http://localhost:${port}`)
})



