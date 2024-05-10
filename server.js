const express = require('express');
const serverDelay = require('json-server');
const cors = require('cors'); 

const app = express();

app.use(cors())


app.use((req, res, next) => {
    setTimeout(next, 1000);
});

const jsonServerMiddleware = serverDelay.router('user-list.json');
app.use(jsonServerMiddleware);

app.listen(3000, () => {
    console.log('Servidor Express con retraso iniciado en el puerto 3000');
});