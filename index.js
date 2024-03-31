

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const router = require('./src/food_delivery/router');
app.use(bodyParser.json());

app.use('/app', router);
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
