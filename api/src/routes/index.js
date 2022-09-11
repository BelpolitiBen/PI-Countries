const express = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouter = require("./country");
const activityRouter = require("./activity");

const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json());
router.use("/countries", countryRouter);
router.use("/activities", activityRouter);

module.exports = router;
