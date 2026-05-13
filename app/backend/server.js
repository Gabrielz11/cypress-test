const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Endpoint de autenticação
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'E-mail e senha são obrigatórios.' });
  }

  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.get(query, [email, password], (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Erro no servidor.' });
    }

    if (user) {
      return res.status(200).json({ 
        message: 'Login realizado com sucesso!',
        user: { id: user.id, email: user.email }
      });
    } else {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
