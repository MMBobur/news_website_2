const router = require('express').Router();



//buyerda routerlar chaqirirladi 
const adminRouter = require('./admin/router');
const UserRouter = require('./Users/user.router');
const CategoryRouter = require('./Categorys/cat.router')




//buyerda table lar
router.use('/users', UserRouter);
router.use('/category',CategoryRouter);
router.use('/admin',adminRouter);





module.exports = router;