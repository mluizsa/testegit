const express = require('express');
const app = express();


app.get('/', (req, ress) => {
    ress.status(200).send({ message: 'Olá mundo, estou funcionando' });
})

app.listen(3001, () => {
    console.log('Api rodando na porta 3001');
})