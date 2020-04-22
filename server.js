const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

const app = express();

// bodyParser middleware
app.use(bodyParser.json());

// DB config
const db = process.env.MONGO_URI || require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db, {  useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

// Serve static assets if production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));