const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { mensagem: '' });
});

app.post('/submit', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;

    if (!nome || !email) {
        mensagem = 'Por favor, preencha todos os campos.';
    } else {
        mensagem = `Dados recebidos: Nome - ${nome}, Email - ${email}`;
    }

    res.render('index', { mensagem: mensagem });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
