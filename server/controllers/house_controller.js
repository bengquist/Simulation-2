const getHouses = (req, res) => {
  const db = req.app.get("db");

  db.getHouses().then(houses => {
    res.status(200).send(houses);
  });
};

const addHouse = (req, res) => {
  const db = req.app.get("db");
  const { name, address, city, state, zip } = req.body;

  db.addHouse([name, address, city, state, zip]).then(houses => {
    res.status(200).send(houses);
  });
};

const deleteHouse = (req, res) => {
  const db = req.app.get("db");
  const { id } = req.params;
  console.log(id);

  db.deleteHouse([id]).then(houses => {
    console.log(houses);
    res.status(200).send(houses);
  });
};

module.exports = {
  getHouses,
  addHouse,
  deleteHouse
};
