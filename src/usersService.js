const db = require("../models/index");
async function list(req, res) {
  try {
    const users = await db.users.findAll();
    res.status(200);
    res.send(users);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

async function single(req, res) {
  try {
    console.log(req.params.id);
    const user = await db.users.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.status(200);
    res.send(user);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
exports.single = single;
exports.list = list;
