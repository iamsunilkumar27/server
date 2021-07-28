const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const morgan = require('morgan')
const cors = require('cors');
app.use(cors());
app.use(morgan('tiny'));
const User = require('./models/user');
require('./db');

app.post('/api/v1/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.json(user);
    } catch (error) {
        return res.json(error);
    }
});

app.get('/api/v1/users', async (req, res) => {
    try {
        const result = await User.find();
        return res.json(result);
    } catch (error) {
        console.error(error);
        return res.json(error);
    }
});

app.put('/api/v1/users/:id', async (req, res) => {
    try {
        const result = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(result);
    } catch (error) {
        console.error(error);
        return res.json(error);
    }
});


app.delete('/api/v1/users/:id', async (req, res) => {
    try {
        const result = await User.findByIdAndRemove(req.params.id);
        return res.json(result);
    } catch (error) {
        console.error(error);
        return res.json(error);
    }
});



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server connected on port ${PORT}`);
});
