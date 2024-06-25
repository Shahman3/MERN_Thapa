const experss = require("express");
const router = experss.Router();
const contactForm = require("../controllers/contact-controller");

router.route("/contact").post(contactForm);
module.exports = router;
