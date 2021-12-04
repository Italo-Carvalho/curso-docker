const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) =>{
    res.send('ola minha imagem!11')
})


app.listen(port, () =>{
    console.log(`executando na porta ${port}`)
})