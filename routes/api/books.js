const router = require("express").Router();
const bookController = require("../../controllers/bookController");

router.use("/books")
    .post(bookController.create);

router.route("/books/:id")
    .get(bookController.findById)
    .put(bookController.update)
    .delete(bookController.remove);

module.exports = router;