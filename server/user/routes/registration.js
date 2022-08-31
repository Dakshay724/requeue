const router = require("express").Router();
const checkToken  = require("./AuthJWT");
const auth = require("./Auth");


router.get("/",checkToken, auth.Userget);
router.post("/",checkToken, auth.UserCreated);
router.get("/:id",checkToken, auth.UsergetByUserId);
router.post("/login",auth.login);
router.patch("/",checkToken, auth.UserUpdated);

module.exports = router;
