const express = require("express")
const { isUserAuthenticated, authorizedRoles } = require("../Middleware/auth")
const { startTrip } = require("../controllers/userTripController")

const router = express.Router()

router.route("/trip/new").post(isUserAuthenticated,authorizedRoles("driver"),startTrip)


module.exports = router