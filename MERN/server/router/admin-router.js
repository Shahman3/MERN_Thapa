const experss = require("express");
const router = experss.Router();
const adminController = require("../controllers/admin-controller");

//? authMiddleware check if user logedIN than these routes access
const authMiddleware = require("../middlewares/auth-middleware");

//? adminMiddleware check if user property "isAdmin" is true than these routes access
//Verifying Whether User is an Admin or Not
const adminMiddleware = require("../middlewares/admin-middleware");

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, adminController.getUserById);
router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);
router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateUserById);
router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminController.getAllContacts);
router
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteContactById);
router
  .route("/contacts/:id")
  .get(authMiddleware, adminMiddleware, adminController.getContactById);
router
  .route("/contacts/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateContactById);
module.exports = router;
