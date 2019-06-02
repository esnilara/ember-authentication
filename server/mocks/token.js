module.exports = function(app) {
  app.post('/token', function(req, res) {
    if (req.body.username === 'user' && req.body.password === 'password') {
      res.send({ access_token: 'meep-token' })
    } else {
      res.status(400).send({ error: 'invalid_grant' });
    }
  });
};
