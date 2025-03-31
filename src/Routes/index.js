const {Router} = require("express");
const router = Router();

const {getUser} = require("../Controllers/index.controller")


router.get("/users", getUser)

module.exports = router;