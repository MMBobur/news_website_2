const router = require('express').Router();



//buyerda routerlar chaqirirladi 
const adminRouter = require('./admin/router');
const UserRouter = require('./Users/user.router');





//buyerda table lar
router.use('/admin',adminRouter);
router.use('/users', UserRouter);





module.exports = router;