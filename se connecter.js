const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const users = [
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' }
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.send('Connexion réussie');
  } else {
    res.status(400).send('Échec de la connexion : utilisateur non trouvé ou mot de passe incorrect');
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
