var exp=require('express')
var router=exp.Router()
var usercntrlr=require('../controller/usercntrlr')


router
.route('/UsersList')
.get(usercntrlr.displayAll)
module.exports=router