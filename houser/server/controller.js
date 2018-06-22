module.exports = {
  addHouse: (req, res, next) => {
    let db = req.app.get("db");
    const { name, address, city, state, zip, img, mortgage, rent } = req.body;

    db.addHouse([name, address, city, state, zip, img, mortgage, rent])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage: "error!"
        });
        console.log(err);
      });
  },

  getHouses: (req, res, next) => {
    let db = req.app.get("db");

    db.get_houses().then(houses => {
      return res.status(200).send(houses);
    });
  },

  deleteHouse: (req, res, next) => {
    let db = req.app.get("db");

    db.delete_house(req.params.id).then(houses => {
      return res.status(200).send(houses);
    });
  }
};
