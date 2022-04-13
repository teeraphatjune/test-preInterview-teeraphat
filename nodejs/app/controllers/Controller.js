const modules = require("../modules/Function.js");

exports.qm = (req, res) => {
  let data = modules.qm();
  res.send(data);
};

exports.q1 = (req, res) => {
  const stock = { a: 1200, b: 95, c: 115 }
  let data = modules.q1(stock);
  res.send(data);
};

exports.q2 = (req, res) => {
  let data = modules.q2();
  res.send(data);
};

exports.q3 = async (req, res) => {
  let data = await modules.q3();
  res.send(data);
};

exports.q4 = (req, res) => {
  let data = modules.q4();
  res.send(data);
};

exports.q5 = (req, res) => {
  let data = modules.q5();
  res.send(data);
};