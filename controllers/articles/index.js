const articles = [
  {
    title: 'Test Article 1',
    createdAt: new Date(),
    description: 'Test Description',
  },
  {
    title: 'Test Article 2',
    createdAt: new Date(),
    description: 'Test Description',
  },
  {
    title: 'Test Article 3',
    createdAt: new Date(),
    description: 'Test Description',
  },
];

exports.getArticles = async (req, res) => {
  res.render('../views/articles', {
    articles,
  });
};

exports.getCreateArticle = async (req, res) => {
  res.render('../views/articles/create');
};
