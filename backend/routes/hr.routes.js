const express = require("express")
const router = express.Router()
const {GetAllEmployess,SimulateAccess} = require("../controllers/hr.controller")

router.get("/employees", GetAllEmployess)
router.get("/simulate", SimulateAccess)


module.exports = router