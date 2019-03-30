var apicntrlr=require('../controller/api')
var exp=require("express")
var router=exp.Router()

router
.route('/keywords')
.get(apicntrlr.keywords)

module.exports=router