// Import components
import express from 'express';
import mongoose from 'mongoose';
import Pusher from 'pusher';

import dbMessages from './dbMessages.js';

/***** APP CONFIG *****/
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: '1082129',
    key: '0fe65b7e254e88f4d72c',
    secret: '38f164118212cae6b151',
    cluster: 'eu',
    encrypted: true
});


/***** MIDDLEWARE *****/
app.use(express.json())

/***** DB CONFIG *****/
const db_name = 'whatsappdb';
const db_password = 'ihyiiGCQfVp69bTX';
const conn_url = `mongodb+srv://whatsapp-client:${db_password}@cluster0.d6kjf.mongodb.net/${db_name}?retryWrites=true&w=majority`;

mongoose.connect(conn_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.once('open', () => {
    console.log("DB connected");

    const msgCollection = db.collection('message_contents');
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {
        console.log(change)
    })
})

// ????

/***** API ROUTES *****/
app.get('/', (req, res) => res.status(200).send('hello world'));

// get all messages
app.get('/api/v1/message/sync', (req, res) => {

    dbMessages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

// post new message
app.post('/api/v1/message/new', (req, res) => {
    const newMessage = req.body

    dbMessages.create(newMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));