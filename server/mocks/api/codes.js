module.exports = function(app) {
  app.get('/api/codes', function(req, res) {
    return res.status(200).send({
      data: [
        {
          type: 'codes',
          id: 1,
          attributes: {
            description: 'Donald Trump\'s Taxes Report Access Code is: ilovemoney'
          }
        },
        {
          type: 'codes',
          id: 2,
          attributes: {
            description: 'Coca Cola Secret Recipe Access Code is: ilovesugar'
          }
        }
      ]
    });
  });
};
