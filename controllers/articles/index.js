const articles = [
  {
    title: 'Test Article 1',
    createdAt: Date.now(),
    description: 'Test Description',
  },
  {
    title: 'Test Article 2',
    createdAt: Date.now(),
    description: 'Test Description',
  },
  {
    title: 'Test Article 3',
    createdAt: Date.now(),
    description: 'Test Description',
  },
];

exports.getArticles = async (req, res) => {
  res.render('../views/articles', {
    articles,
  });
};
