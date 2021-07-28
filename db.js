const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

connection
.then(() => {
    console.log('DB connected');
})
.catch((error) => {
    console.error(error);
});

