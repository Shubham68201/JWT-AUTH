const express = require('express');
const app = express();
const authRouter = require('./router/authRoute');
const databaseconnect = require('./config/databaseConfig');
const cookieParser = require('cookie-parser');
const cors=require('cors');

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.CLIENT_URL],
    credentials: true,
}));

app.use('/api/auth',authRouter);
app.use('/',(req, res) => {
    res.status(200).json({ data : 'JWTauth server' });
});

databaseconnect();

module.exports = app;