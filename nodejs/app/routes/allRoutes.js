module.exports = app => {
    const controller = require("../controllers/Controller.js");

    app.get("/q1", controller.q1);
    app.get("/q2", controller.q2);
    app.get("/q3", controller.q3);
    app.get("/q4", controller.q4);
    app.get("/q5", controller.q5);
  };