const experss = require("express");
const router = experss.Router();
const services = require("../controllers/service-controller");

router.route("/service").get(services);
module.exports = router;
