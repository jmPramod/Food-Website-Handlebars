const homeController = (req, res) => {
  console.log('hai');
  res.render('home', { style: 'home.css' });
};

module.exports = { homeController };
