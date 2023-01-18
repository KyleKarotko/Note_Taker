const router = require ('express').Router();
const noteRoutes= require ('./noteroutes');
router.use('/notes', noteRoutes)

module.exports=router