class HomeController {
  index(req, res) {
    res.send({
      message: 'welcome',
    });
  }
}

module.exports = HomeController;
